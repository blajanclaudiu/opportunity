// Query Bitwise Operators: https://docs.mongodb.com/manual/reference/operator/query-bitwise/

import { Options, QueryOperator } from "../../../core";
import { Any } from "../../../types";
import { processBitwiseQuery } from "./_internal";

/**
 * Matches numeric or binary values in which a set of bit positions all have a value of 1.
 */
export const $bitsAllSet: QueryOperator = (
  selector: string,
  value: Any,
  _options: Options
) => processBitwiseQuery(selector, value, (result, mask) => result == mask);
