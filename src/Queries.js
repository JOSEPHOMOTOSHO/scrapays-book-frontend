import { gql } from "@apollo/client";

export const LOAD_BOOKS = gql`
query{
    getAllBooks{
      id,
      name,
      description
    }
  }
`