import gql from 'graphql-tag';

const SAMPLE_QUERY = gql`
query getHeatTreats {
  heat_treat {
    id
  }
}`

export default SAMPLE_QUERY