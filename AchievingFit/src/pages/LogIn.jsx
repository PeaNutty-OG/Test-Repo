import { Button, Input } from "@mui/joy";
// import { signUpUser } from "./JS/LogIn";

export default function LogInPage() {
  return (
    <div
      style={{
        // backgroundColor: "rgb(245, 245, 245)",
        borderRadius: "10px",
        boxShadow: "6px 6px 10px rgba(0, 0, 0, 0.5)",
        width: "300px",
        // display: "flex",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ textAlign: "center" }}>AchievingFit</h1>
      <Input
        sx={{ margin: 1, padding: 1, width: "275" }}
        placeholder="Email"
        id="email"
        required
      />
      <Input
        sx={{ margin: 1, padding: 1, width: "275" }}
        type="password"
        placeholder="Password"
        id="password"
        required
      />
      <div
        style={{
          display: "flex",
          gap: "5px",
          justifyContent: "center",
          marginBottom: 10,
        }}
      >
        <Button sx={{ margin: 1 }}>Log In</Button>
        <Button /*onClick={signUpUser} */ sx={{ margin: 1 }}>Sign Up</Button>
      </div>
    </div>
  );
}
