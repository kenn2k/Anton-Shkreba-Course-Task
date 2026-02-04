import { Box, CircularProgress, Typography } from "@mui/material";
import { useRequest } from "ahooks";

import { getAllExhibits } from "../../api/actions/exhibitActions";
import { PostCard } from "./PostCard";

import type { Exhibit } from "../../types";
import { CommentModal } from "../comment/CommentModal";
import { useState } from "react";
import { Paginator } from "../UI/Paginator";

export const PostList = () => {
  const [page, setPage] = useState(1);

  const {
    data: exhibits,
    loading,
    error,
  } = useRequest(() => getAllExhibits(page), {
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

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        py: 4,
      }}
    >
      <Paginator
        page={page}
        count={exhibits?.lastPage ?? 1}
        onChange={setPage}
      />

      {exhibits?.data?.map((char: Exhibit) => (
        <PostCard key={char.id} {...char} />
      ))}

      <CommentModal />
    </Box>
  );
};
