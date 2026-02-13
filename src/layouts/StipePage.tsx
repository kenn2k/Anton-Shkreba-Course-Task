import { Box, CircularProgress, Typography } from "@mui/material";
import { PostList } from "../components/post/PostList";
import { useRequest } from "ahooks";
import { getAllExhibits } from "../api/actions/exhibitActions";
import { useState } from "react";
import type { ExhibitsResponse } from "../types";

export const StipePage = () => {
  const [page, setPage] = useState(1);

  const {
    data: exhibits,
    loading,
    error,
  } = useRequest<ExhibitsResponse, []>(() => getAllExhibits(page), {
    refreshDeps: [page],
  });

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

  if (!exhibits) return null;

  return <PostList exhibits={exhibits} page={page} setPage={setPage} />;
};
