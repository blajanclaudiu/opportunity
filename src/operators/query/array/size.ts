// Query Array Operators: https://docs.mongodb.com/manual/reference/operator/query-array/

import { Options, QueryOperator } from "../../../core";
import { Any } from "../../../types";
import { $size as __size, processQuery } from "../../_predicates";

/**
 * Selects documents if the array field is a specified size.
 */
export const $size: QueryOperator = (
  selector: string,
  value: Any,
  options: Options
) => processQuery(selector, value, options, __size);
