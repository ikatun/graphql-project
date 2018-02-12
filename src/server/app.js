import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import path from 'path';
import createSchema from 'decorated-graphql/build/create-schema';

const srcDir = path.join(__dirname, '..');

const app = express();
app.disable('x-powered-by');
app.use(cors());
app.options('*', cors());

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: createSchema(srcDir) }));
// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.use(express.static('public'));

export default app;
