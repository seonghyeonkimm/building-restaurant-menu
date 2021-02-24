export const schema = gql`
  type Menu {
    id: Int!
    imageSrc: String!
    date: String!
    createdAt: DateTime!
  }

  type Query {
    menus: [Menu!]!
    menu(id: Int!): Menu
  }

  input CreateMenuInput {
    imageSrc: String!
    date: String!
  }

  input UpdateMenuInput {
    imageSrc: String
    date: String
  }

  type Mutation {
    createMenu(input: CreateMenuInput!): Menu!
    updateMenu(id: Int!, input: UpdateMenuInput!): Menu!
    deleteMenu(id: Int!): Menu!
  }
`
