import Layout from '../../components/layout'
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { withApollo } from '../../lib/withApollo';

const GET_HEAT_TREATS = gql`
query getHeatTreats {
  hardening_heat_treat {
    id
    samples {
      toughness
      hardness
    }
  }
}`;

const HeatTreatList = props => {
  
  const { heatTreats } = props

  console.log( heatTreats )
  
  
  const listItems = heatTreats.map( ht => {
    // TODO : Should create unique key per item in list
    return( 
      <p>Heat treat : id={ht.id}</p>
    )
  })
  
  console.log(listItems)

  return (
    <Layout>
      <div>
        <p>Just getting warmed up</p>
        <p>HT</p>

        {listItems}

      </div>

    </Layout>
  ) 
}


const HeatTreatQuery = () => {
  const { loading, error, data } = useQuery(GET_HEAT_TREATS);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }
  return <HeatTreatList heatTreats={data.hardening_heat_treat} />;
};

export default withApollo()(HeatTreatQuery);
export { GET_HEAT_TREATS };