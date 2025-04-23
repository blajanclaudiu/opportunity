// Query Evaluation Operators: https://docs.mongodb.com/manual/reference/operator/query-evaluation/

import { Options } from "../../../core";
import { Any, AnyObject, Predicate } from "../../../types";
import { assert } from "../../../util";

/**
 * Validate documents against the given JSON Schema.
 *
 * @param selector
 * @param schema
 * @returns {Function}
 */
export function $jsonSchema(
  _: string,
  schema: Any,
  options: Options
): Predicate<Any> {
  assert(
    !!options?.jsonSchemaValidator,
    "$jsonSchema: must configure 'jsonSchemaValidator' option to this operator."
  );
  const validate = options?.jsonSchemaValidator(schema as AnyObject);
  return (obj: AnyObject) => validate(obj);
}
