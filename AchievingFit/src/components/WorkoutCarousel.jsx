import { Card } from "@mui/joy";
import { Typography, Button } from "@mui/joy";
import { CardActions } from "@mui/material";

export default function WorkoutCarousel() {
  return (
    <>
      <Card variant="soft" sx={{ width: 200, height: 75, margin: 2 }}>
        <div style={{ display: "flex" }}>
          <Typography level="title-md" sx={{ mr: 2 }}>
            Chest Day
          </Typography>
          <Typography level="body-xs" sx={{ mr: 1 }}>
            April 1, 2025
          </Typography>
          <CardActions sx={{ mt: 1 }}>
            <Button variant="outlined" color="primary">
              View
            </Button>
          </CardActions>
        </div>
      </Card>
      <Card variant="soft" sx={{ width: 200, height: 75, margin: 2 }}>
        <div style={{ display: "flex" }}>
          <Typography level="title-md" sx={{ mr: 2 }}>
            Back Day
          </Typography>
          <Typography level="body-xs" sx={{ mr: 1 }}>
            April 2, 2025
          </Typography>
          <CardActions sx={{ mt: 1 }}>
            <Button variant="outlined" color="primary">
              View
            </Button>
          </CardActions>
        </div>
      </Card>
      <Card variant="soft" sx={{ width: 200, height: 75, margin: 2 }}>
        <div style={{ display: "flex" }}>
          <Typography level="title-md" sx={{ mr: 2 }}>
            Arms
          </Typography>
          <Typography level="body-xs" sx={{ mr: 1 }}>
            April 3, 2025
          </Typography>
          <CardActions sx={{ mt: 1 }}>
            <Button variant="outlined" color="primary">
              View
            </Button>
          </CardActions>
        </div>
      </Card>
      <Card variant="soft" sx={{ width: 200, height: 75, margin: 2 }}>
        <div style={{ display: "flex" }}>
          <Typography level="title-md" sx={{ mr: 2 }}>
            Legs
          </Typography>
          <Typography level="body-xs" sx={{ mr: 1 }}>
            April 4, 2025
          </Typography>
          <CardActions sx={{ mt: 1 }}>
            <Button variant="outlined" color="primary">
              View
            </Button>
          </CardActions>
        </div>
      </Card>
      <Card variant="soft" sx={{ width: 200, height: 75, margin: 2 }}>
        <div style={{ display: "flex" }}>
          <Typography level="title-md" sx={{ mr: 2 }}>
            Cardio
          </Typography>
          <Typography level="body-xs" sx={{ mr: 1 }}>
            April 5, 2025
          </Typography>
          <CardActions sx={{ mt: 1 }}>
            <Button variant="outlined" color="primary">
              View
            </Button>
          </CardActions>
        </div>
      </Card>
    </>
  );
}
