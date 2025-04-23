import { Any } from "../../../types";
import { isArray } from "../../../util";
import { processQuery } from "../../_predicates";

type Bitmask = number | number[];

export const processBitwiseQuery = (
  selector: string,
  value: Any,
  predicate: (_1: number, _2: number) => boolean
) => {
  return processQuery(
    selector,
    value,
    null,
    (value: number, mask: Bitmask): boolean => {
      let b = 0;
      if (isArray(mask)) {
        for (const n of mask) b = b | (1 << n);
      } else {
        b = mask;
      }
      return predicate(value & b, b);
    }
  );
};
