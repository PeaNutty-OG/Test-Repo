import Button from "@mui/joy/Button";
import { useNavigate } from "react-router-dom";

export default function LogInButton({ page, content }) {
  const navigate = useNavigate();

  return (
    <Button color="neutral" variant="soft" onClick={() => navigate(page)}>
      {content}
    </Button>
  );
}
