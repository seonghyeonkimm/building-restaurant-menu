export const schema = gql`
  type Menu {
    id: Int!
    title: String!
    imageSrc: String!
    createdAt: DateTime!
  }

  type Query {
    menus: [Menu!]!
    menu(id: Int!): Menu
  }

  input CreateMenuInput {
    title: String!
    imageSrc: String!
  }

  input UpdateMenuInput {
    title: String
    imageSrc: String
  }

  type Mutation {
    createMenu(input: CreateMenuInput!): Menu!
    updateMenu(id: Int!, input: UpdateMenuInput!): Menu!
    deleteMenu(id: Int!): Menu!
  }
`
