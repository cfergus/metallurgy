import { useQuery, gql } from "@apollo/client";
import ToughnessHardnessChart from "./charts/toughness_hardness";
import GenericTable from "./tables/generic_table";


export default function QueryContainer() {

  const STEEL_QUERY = gql`
      query getSteelSamples {
        steel {
          name
          id
          samples {
            id
            toughness
            hardness
            hardening_heat_treat {
              id
              austenitization_temperature
              austenitization_hold_time
              temper_temperature
            }
          }
        }
      }
    `

  const { loading, error, data } = useQuery(STEEL_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  // return data.hardening_heat_treat.map(({ id, samples }) => (
  //   <div key={id}>
  //     <p>
  //       {id}: {samples.length}
  //     </p>
  //   </div>
  // ));

  return (
    <div>
      <ToughnessHardnessChart data={data}></ToughnessHardnessChart>
      <GenericTable data={data}></GenericTable>
    </div>
  )

}