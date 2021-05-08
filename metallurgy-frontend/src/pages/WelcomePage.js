import { Link as RouterLink } from 'react-router-dom';
import { Card, CardContent, Link, Typography } from "@material-ui/core";

export default function WelcomePage() {
  return(
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Steel Exploration
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Explore the characteristics of blade steel. Need a starting point? Try: 
          <ul>
            <li>
              <RouterLink to="/steels">
                <Link>Listing blade steels</Link>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/steels/MagnaCut">
                <Link to="/steels/MagnaCut">Looking at the properties of MagnaCut</Link>
              </RouterLink>
            </li>
          </ul>
           
          or suggest things more important to you
        </Typography>
      </CardContent>
    </Card>
  )
}