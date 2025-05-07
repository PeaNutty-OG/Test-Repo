import * as React from "react";
import Button from "@mui/joy/Button";
import { useNavigate } from "react-router-dom";

export default function LogInButton() {
  const navigate = useNavigate();

  return (
    <Button color="neutral" variant="soft" onClick={() => navigate("LogIn")}>
      Log In
    </Button>
  );
}
