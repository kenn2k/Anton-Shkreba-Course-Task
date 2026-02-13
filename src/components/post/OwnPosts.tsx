import Grid from "@mui/material/Grid";

import { OwnPostsCard } from "./OwnPostsCard";

import type { Exhibit, ExhibitsResponse } from "../../types";

interface OwnPostsProps {
  myExhibits: ExhibitsResponse;
}

export const OwnPosts = ({ myExhibits }: OwnPostsProps) => {
  return (
    <Grid container spacing={3}>
      {myExhibits?.data?.map((post: Exhibit) => (
        <Grid key={post.id}>
          <OwnPostsCard {...post} />
        </Grid>
      ))}
    </Grid>
  );
};
