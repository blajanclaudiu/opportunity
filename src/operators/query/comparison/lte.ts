// Query Comparison Operators: https://docs.mongodb.com/manual/reference/operator/query-comparison/

import { Options, QueryOperator } from "../../../core";
import { Any } from "../../../types";
import { $lte as __lte, processQuery } from "../../_predicates";

/**
 * Matches values that are less than or equal to the value specified in the query.
 */
export const $lte: QueryOperator = (
  selector: string,
  value: Any,
  options: Options
) => processQuery(selector, value, options, __lte);
