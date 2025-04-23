// Query Array Operators: https://docs.mongodb.com/manual/reference/operator/query-array/

import { Options, QueryOperator } from "../../../core";
import { Any } from "../../../types";
import { $all as __all, processQuery } from "../../_predicates";

/**
 * Matches arrays that contain all elements specified in the query.
 */
export const $all: QueryOperator = (
  selector: string,
  value: Any,
  options: Options
) => processQuery(selector, value, options, __all);
