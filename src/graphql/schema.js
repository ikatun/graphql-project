import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import glob from 'glob';
import generateSchemaJson from './generate-schema-json';
import { toExcecutableMergedSchema, toMergedSchemasString } from './decorators';

const requiredModules = glob.sync(path.join(__dirname, '..', '**/*.graphql.js')).map(require);
const all = _.flatten(requiredModules.map(_.values));
export default toExcecutableMergedSchema(all);

const schemaPrefix = `schema {
  query: Query
  mutation: Mutation
}`;
const mergedSchema = toMergedSchemasString(all).replace(schemaPrefix, '');

fs.writeFileSync(
  path.join(__dirname, '..', '..', 'graphql.graphql'),
  mergedSchema,
  'utf8',
);

generateSchemaJson(mergedSchema).then((json) => {
  fs.writeFileSync(
    path.join(__dirname, '..', '..', 'graphql.schema.json'),
    JSON.stringify(json),
    'utf8',
  );
});
