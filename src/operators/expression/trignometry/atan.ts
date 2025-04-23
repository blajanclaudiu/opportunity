// Trignometry Expression Operators: https://docs.mongodb.com/manual/reference/operator/aggregation/#trigonometry-expression-operators

import { ExpressionOperator, Options } from "../../../core";
import { Any, AnyObject } from "../../../types";
import { processOperator } from "./_internal";

/** Returns the inverse tangent (arc tangent) of a value in radians. */
export const $atan: ExpressionOperator = (
  obj: AnyObject,
  expr: Any,
  options: Options
): Any => processOperator(obj, expr, options, Math.atan);
