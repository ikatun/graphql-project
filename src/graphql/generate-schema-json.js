import { buildASTSchema, graphql, parse } from 'graphql';
import { introspectionQuery } from 'graphql/utilities';

export default function introspect(schemaContents: string) {
  const schema = buildASTSchema(parse(schemaContents), { commentDescriptions: true });
  return graphql(schema, introspectionQuery);
}
