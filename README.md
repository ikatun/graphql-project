# graphql-project
An example react/graphql project

Use `npm run backend` to start the backend on port 3001.

TODO: `npm run frontend` to start the react-app on port 3000.

To register a new type with resolvers (Take a look at src/user/user.graphql.js for an example):
 - create an *.graphql.js file anywhere within the src directory 
 - the file should contain one or more `export`ed classes
 - exported classes should be decorated with @type
 
