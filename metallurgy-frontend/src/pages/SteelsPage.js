import { useQuery, gql } from "@apollo/client";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from 'react-router-dom';

export default function SteelsPage() {


  const STEEL_QUERY = gql`
      query getSteels {
        steel(order_by: {name: asc}) {
          name
          id
        }
      }
    `

  const { loading, error, data } = useQuery(STEEL_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <List dense="true">
      {
        data.steel.map( steel => makeSteelLink( steel ) )
      }
    </List>
  )
}

function ListItemLink(props) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
    [to],
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

function makeSteelLink( steel ) {
  return (
    <ListItemLink to={`/steels/${steel.name}`} primary={steel.name} />
  )
}