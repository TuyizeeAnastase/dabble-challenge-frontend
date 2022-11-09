import { gql } from "@apollo/client";

export const CREATE_POST = gql`
  mutation addCountry(
    $country_name: String!
    $year: String!
    $area: Int!
    $total_population: Int!
  ) {
    addCountry(
      country_name: $country_name
      year: $year
      area: $area
      total_population: $total_population
    ) {
      country_name
      year
      area
      total_population
    }
  }
`;

export const UPDATE_POST = gql`
  mutation updateCountry(
    $_id: ID!
    $country_name: String!
    $year: String!
    $area: Int!
    $total_population: Int!
  ) {
    updateCountry(
      _id: $_id
      country_name: $country_name
      year: $year
      area: $area
      total_population: $total_population
    ) {
      country_name
      year
      area
      total_population
    }
  }
`;

export const DELETE_COUNTRY = gql`
  mutation deleteCountry($deleteCountryId: ID!) {
    deleteCountry(id: $deleteCountryId)
  }
`;
