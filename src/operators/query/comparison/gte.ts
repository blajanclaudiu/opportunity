// Query Comparison Operators: https://docs.mongodb.com/manual/reference/operator/query-comparison/

import { Options, QueryOperator } from "../../../core";
import { Any } from "../../../types";
import { $gte as __gte, processQuery } from "../../_predicates";

/**
 * 	Matches values that are greater than or equal to a specified value.
 */
export const $gte: QueryOperator = (
  selector: string,
  value: Any,
  options: Options
) => processQuery(selector, value, options, __gte);
