import { Box, CircularProgress, Pagination } from "@mui/material";
import { useRequest } from "ahooks";

import { getAllExhibits } from "../../api/actions/exhibitActions";
import { PostCard } from "./PostCard";

import type { Exhibit } from "../../types";
import { CommentModal } from "../comment/CommentModal";
import { useState } from "react";

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
  if (error) return <div>Error</div>;

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
      {exhibits?.data?.map((char: Exhibit) => (
        <PostCard key={char.id} {...char} />
      ))}

      <Pagination
        page={page}
        count={5}
        onChange={(_, value) => setPage(value)}
        color="primary"
      />
      <CommentModal />
    </Box>
  );
};
