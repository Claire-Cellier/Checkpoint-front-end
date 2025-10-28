import { gql } from '@apollo/client';

export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      id
      code
      name
      emoji
      continent {
        name
      }
    }
  }
`;

export const GET_COUNTRY_BY_CODE = gql`
  query GetCountry($code: String!) {
    country(code: $code) {
      id
      code
      name
      emoji
      continent {
        name
      }
    }
  }
`;

export const ADD_COUNTRY = gql`
  mutation AddCountry($data: NewCountryInput!) {
    addCountry(data: $data) {
      id
      code
      name
      emoji
      continent {
        name
      }
    }
  }
`;