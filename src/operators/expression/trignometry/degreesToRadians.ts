// Trignometry Expression Operators: https://docs.mongodb.com/manual/reference/operator/aggregation/#trigonometry-expression-operators

import { ExpressionOperator, Options } from "../../../core";
import { Any, AnyObject } from "../../../types";
import { processOperator } from "./_internal";

const degreesToRadians = (n: number) => n * (Math.PI / 180);

/** Converts a value from degrees to radians. */
export const $degreesToRadians: ExpressionOperator = (
  obj: AnyObject,
  expr: Any,
  options: Options
): Any =>
  processOperator(obj, expr, options, degreesToRadians, {
    Infinity: Infinity,
    "-Infinity": Infinity
  });
