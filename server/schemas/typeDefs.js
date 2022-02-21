const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
        username: String
        password: String
        email: String
        bookCount: Int
        savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User

  }

  type Book {
        authors: [String]
        description: String 
        bookId: String
        image: String
        link: String
        title: String 
    }

    input bookDataInput {
        authors: [String]
        description: String
        title: String!
        bookId: String!
        image: String 
        link: String
    }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(input: bookDataInput): User
        deleteBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
