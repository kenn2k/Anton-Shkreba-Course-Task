import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import { Box, Button, Toolbar } from "@mui/material";
import { useNavigate } from "react-router";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { logout } from "../../store/slices/userSlice";

export const ControlBar = () => {
  const navigate = useNavigate();
  const dipatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector((state) => state.user);

  const handleLogOutClick = () => {
    dipatch(logout());
    navigate("/user/login", { replace: true });
  };
  return (
    <Toolbar sx={{ gap: 2 }}>
      {isAuthenticated && (
        <>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate("/post")}
            startIcon={<AddIcon />}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.25)" },
              fontWeight: "bold",
            }}
          >
            New Post
          </Button>
          <Button
            color="inherit"
            startIcon={<HomeIcon />}
            sx={{ textTransform: "none", fontSize: "1rem" }}
            onClick={() => navigate("/")}
          >
            All Posts
          </Button>
          <Button
            color="inherit"
            startIcon={<ListAltIcon />}
            sx={{ textTransform: "none", fontSize: "1rem" }}
            onClick={() => navigate("/home")}
          >
            My Posts
          </Button>
        </>
      )}
      <Box sx={{ flexGrow: 1 }} />
      {isAuthenticated ? (
        <Button
          color="inherit"
          onClick={handleLogOutClick}
          endIcon={<LogoutIcon />}
          sx={{
            opacity: 0.9,
            "&:hover": {
              opacity: 1,
              backgroundColor: "rgba(255, 0, 0, 0.1)",
            },
          }}
        >
          Log Out
        </Button>
      ) : (
        <Button color="inherit" onClick={() => navigate("/user/login")}>
          Login
        </Button>
      )}
    </Toolbar>
  );
};
