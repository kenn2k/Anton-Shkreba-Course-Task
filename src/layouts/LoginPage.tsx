import { Box } from "@mui/material";
import { LoginForm } from "../components/auth/LoginForm";

export const LoginPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <LoginForm />
    </Box>
  );
};
