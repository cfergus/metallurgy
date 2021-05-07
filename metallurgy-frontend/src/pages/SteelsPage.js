import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

export default function SteelsPage() {


  const STEEL_QUERY = gql`
      query getSteels {
        steel {
          name
          id
        }
      }
    `

  const { loading, error, data } = useQuery(STEEL_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <ul>
        {
          data.steel.map( steel => makeSteelLink( steel ) )
        }
      </ul>
    </div>
  )
}

function makeSteelLink( steel ) {
  return (
    <li>
      <Link to={`/steels/${steel.name}`}>{steel.name}</Link>
    </li>
  )
}