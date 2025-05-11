import TabBar from "../components/TabBar";
import LogInButton from "../components/LogInButton";
import WorkoutCarousel from "../components/WorkoutCarousel";
import Routines from "../components/Routines";
import { Avatar, Typography, Chip } from "@mui/joy";
import { BarChart } from "@mui/x-charts/BarChart";
import { Unstable_RadarChart as RadarChart } from "@mui/x-charts/RadarChart";

export default function Home() {
  const Page = "LogIn";
  const Content = "Log In";
  return (
    <>
      <div
        style={{
          display: "flex",
        }}
      >
        <LogInButton page={Page} content={Content} />
        <TabBar />
      </div>

      <div style={{ height: "40px" }}></div>

      <div style={{ display: "flex" }}>
        <Typography level="title-sm" sx={{ ml: "32.5px" }}>
          Profile
        </Typography>
        <Typography level="title-sm" sx={{ ml: "50px" }}>
          Recent Workouts
        </Typography>
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar sx={{ width: 75, height: 75, ml: 2, mr: 2 }} />
        <WorkoutCarousel sx={{ ml: 2, mr: 2 }} />
      </div>
      <br></br>
      <br></br>
      <Typography level="title-sm" sx={{ ml: 16 }}>
        Frequent Routines
      </Typography>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Chip sx={{ width: 75, height: 75, ml: 5, mr: 5 }}>
          <Typography level="title-lg">+</Typography>
        </Chip>
        <Routines sx={{ ml: 2, mr: 2 }} />
      </div>
      <br></br>
      <br></br>
      <div style={{ display: "flex" }}>
        <BarChart
          sx={{
            justifySelf: "left",
          }}
          xAxis={[
            {
              data: [
                "Upper Body Workouts",
                "Lower Body Workouts",
                "Total Workouts",
              ],
            },
          ]}
          series={[{ data: [5, 3, 8] }]}
          height={220}
          width={600}
        />
        <RadarChart
          height={220}
          series={[{ label: "Distribution", data: [30, 20, 25, 22, 5, 12] }]}
          radar={{
            max: 30,
            metrics: ["Chest", "Triceps", "Back", "Biceps", "Quads", "Abs"],
          }}
        />
      </div>
    </>
  );
}
