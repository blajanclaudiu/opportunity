// Bitwise Operators: https://www.mongodb.com/docs/manual/reference/operator/aggregation/bitOr/#mongodb-expression-exp
import { ExpressionOperator, Options } from "../../../core";
import { Any, AnyObject } from "../../../types";
import { processBitwise } from "./_internal";

/**
 * Returns the result of a bitwise or operation on an array of int or long values.
 *
 * @param obj RawObject from collection
 * @param expr Right hand side expression of operator
 * @returns {Number}
 */
export const $bitOr: ExpressionOperator = (
  obj: AnyObject,
  expr: Any,
  options: Options
) =>
  processBitwise(obj, expr, options, nums => nums.reduce((a, b) => a | b, 0));
