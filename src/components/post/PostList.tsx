import { Box } from "@mui/material";

import { PostCard } from "./PostCard";

import type { Exhibit } from "../../types";
import { CommentModal } from "../comment/CommentModal";

import { Paginator } from "../UI/Paginator";

interface PostListProps {
  exhibits: {
    data: Exhibit[];
    lastPage: number;
  };
  page: number;
  setPage: (page: number) => void;
}

export const PostList = ({ exhibits, page, setPage }: PostListProps) => {
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
