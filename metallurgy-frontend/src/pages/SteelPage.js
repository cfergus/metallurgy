import { useQuery, gql } from "@apollo/client";
import { Card, CardContent, Grid, makeStyles, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import TemperingHardnessChart from "../components/charts/TemperingHardnessChart";
import ToughnessHardnessChart from "../components/charts/ToughnessHardnessChart";
import CharacteristicsComparisonChart from "../components/charts/CharacteristicsComparisonChart";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  row: {
    display: 'flex',
    margin: '0 -15px',
  },
  info: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  loaderWrap: {
    width: '100%',
    height: '100%',
    minHeight: 'calc(100vh - 64px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default function SteelPage() {

  const classes = useStyles();

  let { id } = useParams();

  // TODO : query to get steel by name
  const STEEL_QUERY = gql`
      query getSteels($steelName: String!) {
        steel(where: {name: {_eq: $steelName}}) {
          name
          description
          id
          samples {
            id
            hardness
            toughness
            hardening_heat_treat {
              austenitization_hold_time
              austenitization_temperature
              temper_temperature
              id
            }
          }
        }
      }
    `

  const { loading, error, data } = useQuery(
    STEEL_QUERY,
    { 
      skip: !id || id === '', // If the id has not yet been resolved, wait to issue the query
      variables: { steelName: id } 
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error while retrieving data</p>;

  const steel = data.steel[0]

  return (
    <div className={classes.root}>
      
      <Grid container spacing={4}>
        <Grid item xs={12}>

          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {steel.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {steel.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <ToughnessHardnessChart data={data}></ToughnessHardnessChart>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <TemperingHardnessChart data={data}></TemperingHardnessChart>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <CharacteristicsComparisonChart data={data}></CharacteristicsComparisonChart>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <p>More resources</p>
              <a href="https://knifesteelnerds.com/2021/03/25/cpm-magnacut/">Announcement of steel</a>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )

}
