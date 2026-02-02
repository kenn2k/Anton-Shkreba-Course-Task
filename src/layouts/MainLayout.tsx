import { Outlet } from "react-router";
import { ControlBar } from "../components/UI/ControlBar";
import { AppBar, Box } from "@mui/material";

export const MainLayout = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" elevation={2}>
          <ControlBar />
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
};
