// Query Comparison Operators: https://docs.mongodb.com/manual/reference/operator/query-comparison/

import { Options, QueryOperator } from "../../../core";
import { Any } from "../../../types";
import { $in as __in, processQuery } from "../../_predicates";

/**
 * Matches any of the values that exist in an array specified in the query.
 */
export const $in: QueryOperator = (
  selector: string,
  value: Any,
  options: Options
) => processQuery(selector, value, options, __in);
