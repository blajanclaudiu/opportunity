// Query Comparison Operators: https://docs.mongodb.com/manual/reference/operator/query-comparison/
import { Options, QueryOperator } from "../../../core";
import { Any } from "../../../types";
import { $gt as __gt, processQuery } from "../../_predicates";

/**
 * Matches values that are greater than a specified value.
 */
export const $gt: QueryOperator = (
  selector: string,
  value: Any,
  options: Options
) => processQuery(selector, value, options, __gt);
