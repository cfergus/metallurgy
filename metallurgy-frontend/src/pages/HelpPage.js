import { Card, CardContent, Typography } from "@material-ui/core";

export default function HelpPage () {
  return(
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Help, and other content
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Given the funding for this project (big ol' zero), don't expect much.
          But it was created out of love, so if you have something to ask, please do, and we can work together to make it happen.
        </Typography>
      </CardContent>
    </Card>
  )
}