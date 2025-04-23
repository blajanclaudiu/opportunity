// Query Comparison Operators: https://docs.mongodb.com/manual/reference/operator/query-comparison/

import { Options, QueryOperator } from "../../../core";
import { Any } from "../../../types";
import { $eq as __eq, processQuery } from "../../_predicates";

/**
 * Matches values that are equal to a specified value.
 */
export const $eq: QueryOperator = (
  selector: string,
  value: Any,
  options: Options
) => processQuery(selector, value, options, __eq);
