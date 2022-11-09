import { gql } from "@apollo/client";

export const getAllCountries = gql`
  {
    getCountries {
      _id
      country_name
      year
      area
      total_population
    }
  }
`;

export const getCountry = gql`
{
  getCountry{
    _id
    country_name
    year
    area
    total_population
  }
}`;
