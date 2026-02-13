import { Box, CircularProgress, Typography } from "@mui/material";
import { OwnPosts } from "../components/post/OwnPosts";
import { useRequest } from "ahooks";
import { getMyExhibits } from "../api/actions/exhibitActions";
import type { ExhibitsResponse } from "../types";

export const HomePage = () => {
  const {
    data: myExhibits,
    loading,
    error,
  } = useRequest<ExhibitsResponse, []>(getMyExhibits);

  if (loading)
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 2 }}>
        <CircularProgress />
      </Box>
    );
  if (error)
    return (
      <Typography color="error" variant="body2">
        Failed to load posts.
      </Typography>
    );

  if (!myExhibits?.data?.length) {
    return (
      <Typography variant="body2" sx={{ color: "text.secondary", py: 1 }}>
        No personal posts found
      </Typography>
    );
  }

  return <OwnPosts myExhibits={myExhibits} />;
};
