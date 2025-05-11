import { Card } from "@mui/joy";
import { Typography, CardActions, Button } from "@mui/joy";

export default function WorkoutCarousel() {
  return (
    <>
      <Card variant="soft" sx={{ width: 200, height: 75, margin: 2 }}>
        <Typography level="title-md">Chest Day</Typography>
        <Typography level="body-xs"></Typography>
        <CardActions sx={{ mt: -3 }}>
          <Button variant="soft" color="primary">
            Start
          </Button>
          <Button variant="outlined" color="primary">
            Edit
          </Button>
        </CardActions>
      </Card>
      <Card variant="soft" sx={{ width: 200, height: 75, margin: 2 }}>
        <Typography level="title-md">Back Day</Typography>
        <Typography level="body-xs"></Typography>
        <CardActions sx={{ mt: -3 }}>
          <Button variant="soft" color="primary">
            Start
          </Button>
          <Button variant="outlined" color="primary">
            Edit
          </Button>
        </CardActions>
      </Card>
      <Card variant="soft" sx={{ width: 200, height: 75, margin: 2 }}>
        <Typography level="title-md">Arms</Typography>
        <Typography level="body-xs"></Typography>
        <CardActions sx={{ mt: -3 }}>
          <Button variant="soft" color="primary">
            Start
          </Button>
          <Button variant="outlined" color="primary">
            Edit
          </Button>
        </CardActions>
      </Card>
      <Card variant="soft" sx={{ width: 200, height: 75, margin: 2 }}>
        <Typography level="title-md">Legs</Typography>
        <Typography level="body-xs"></Typography>
        <CardActions sx={{ mt: -3 }}>
          <Button variant="soft" color="primary">
            Start
          </Button>
          <Button variant="outlined" color="primary">
            Edit
          </Button>
        </CardActions>
      </Card>
      <Card variant="soft" sx={{ width: 200, height: 75, margin: 2 }}>
        <Typography level="title-md">Cardio</Typography>
        <Typography level="body-xs"></Typography>
        <CardActions sx={{ mt: -3 }}>
          <Button variant="soft" color="primary">
            Start
          </Button>
          <Button variant="outlined" color="primary">
            Edit
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
