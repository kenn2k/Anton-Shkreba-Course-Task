import { Outlet } from "react-router";
import { ControlBar } from "../components/UI/ControlBar";
import { AppBar, Box } from "@mui/material";

export const MainLayout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar position="static" elevation={2}>
        <ControlBar />
      </AppBar>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
    </Box>
  );
};
