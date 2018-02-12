import { type, query, mutation } from '../graphql/decorators';

const allUsers = [{
  id: 1,
  firstName: 'Mate',
  lastName: 'Mišo',
  email: 'mate@miso.hr',
  password: 'alkohol',
}, {
  id: 2,
  firstName: 'Mislav',
  lastName: 'The First',
  email: 'mislav1@coreline.agency',
  password: 'unikat1',
}, {
  id: 3,
  firstName: 'Mislav',
  lastName: 'The Second',
  email: 'mislav2@coreline.agency',
  password: 'unikat2',
}];

@type`
  id: ID!
  firstName: String!
  lastName: String!
  email: String!
  password: String!`
export class User {
  @query`: [User]!`
  getUsers() {
    return allUsers;
  }

  @mutation`(firstName: String!, lastName: String!, email: String!): User!`
  createUser(rootResult, { firstName, lastName, email }) {
    const user = { id: allUsers.length + 1, firstName, lastName, email };
    allUsers.push(user);
    return user;
  }
}
