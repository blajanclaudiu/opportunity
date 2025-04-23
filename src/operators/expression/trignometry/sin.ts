// Trignometry Expression Operators: https://docs.mongodb.com/manual/reference/operator/aggregation/#trigonometry-expression-operators

import { ExpressionOperator, Options } from "../../../core";
import { Any, AnyObject } from "../../../types";
import { processOperator } from "./_internal";

/** Returns the sine of a value that is measured in radians. */
export const $sin: ExpressionOperator = (
  obj: AnyObject,
  expr: Any,
  options: Options
): Any => processOperator(obj, expr, options, Math.sin);
