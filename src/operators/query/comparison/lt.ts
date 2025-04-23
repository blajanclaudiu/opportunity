// Query Comparison Operators: https://docs.mongodb.com/manual/reference/operator/query-comparison/

import { Options, QueryOperator } from "../../../core";
import { Any } from "../../../types";
import { $lt as __lt, processQuery } from "../../_predicates";

/**
 * Matches values that are less than the value specified in the query.
 */
export const $lt: QueryOperator = (
  selector: string,
  value: Any,
  options: Options
) => processQuery(selector, value, options, __lt);
