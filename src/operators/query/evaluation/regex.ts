// Query Evaluation Operators: https://docs.mongodb.com/manual/reference/operator/query-evaluation/

import { Options, QueryOperator } from "../../../core";
import { Any } from "../../../types";
import { $regex as __regex, processQuery } from "../../_predicates";

/**
 * Selects documents where values match a specified regular expression.
 */
export const $regex: QueryOperator = (
  selector: string,
  value: Any,
  options: Options
) => processQuery(selector, value, options, __regex);
