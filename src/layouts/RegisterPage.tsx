import { Box } from "@mui/material";
import { RegisterForm } from "../components/auth/RegisterForm";

export const RegisterPage = () => {
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
      <RegisterForm />
    </Box>
  );
};
