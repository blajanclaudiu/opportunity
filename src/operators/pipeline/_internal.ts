import { Options } from "../../core";
import { Any, AnyObject, TimeUnit } from "../../types";
import { $documents } from "./documents";

export type Boundary = "current" | "unbounded" | number;

export interface WindowOutputOption {
  readonly documents?: [Boundary, Boundary];
  readonly range?: [Boundary, Boundary];
  readonly unit?: TimeUnit;
}

export interface SetWindowFieldsInput {
  readonly partitionBy?: Any;
  readonly sortBy: Record<string, 1 | -1>;
  readonly output: Record<
    string,
    {
      [x: string]: Any;
      window?: WindowOutputOption;
    }
  >;
}

export interface WindowOperatorInput {
  readonly parentExpr: SetWindowFieldsInput;
  readonly inputExpr: Any;
  readonly documentNumber: number;
  readonly field: string;
}

/** Checks whether the specified window is unbounded. */
export const isUnbounded = (window: WindowOutputOption): boolean => {
  const boundary = window?.documents || window?.range;
  return (
    !boundary || (boundary[0] === "unbounded" && boundary[1] === "unbounded")
  );
};

export function filterDocumentsStage(
  pipeline: AnyObject[],
  options: Options
): {
  documents?: AnyObject[];
  pipeline: AnyObject[];
} {
  const docs = !!pipeline && pipeline[0]?.$documents;
  if (!docs) return { pipeline };
  return {
    documents: $documents(null, docs, options).value(),
    pipeline: pipeline.slice(1)
  };
}
