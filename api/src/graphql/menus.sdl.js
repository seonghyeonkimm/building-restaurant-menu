export const schema = gql`
  type Menu {
    id: Int!
    imageSrc: String!
    createdAt: DateTime!
  }

  type Query {
    menus: [Menu!]!
  }

  input CreateMenuInput {
    imageSrc: String!
  }

  input UpdateMenuInput {
    imageSrc: String
  }
`
