import CommentIcon from "@mui/icons-material/Comment";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import type { Exhibit } from "../../types";
import { openCommentModal } from "../../store/slices/commentSlice";
import { useAppDispatch } from "../../store/hooks";
import { getCurrentUser } from "../../api/actions/userActions";
import { useRequest } from "ahooks";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteExhibit } from "../../api/actions/exhibitActions";

export const PostCard = ({ description, imageUrl, id, user }: Exhibit) => {
  const dispatch = useAppDispatch();
  const { data: currentUser, loading } = useRequest(getCurrentUser);

  const isAuthor = currentUser?.id === user.id;

  const handleOpenComments = () => {
    dispatch(openCommentModal(id));
  };

  const handleDeletePost = () => {
    dispatch(deleteExhibit(id));
  };
  return (
    <Card sx={{ width: "100%", maxWidth: 500 }}>
      <CardMedia
        component="img"
        height="194"
        image={imageUrl}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={handleOpenComments}>
          <CommentIcon />
        </IconButton>
        {!loading && isAuthor && (
          <IconButton onClick={handleDeletePost} color="error">
            <DeleteIcon />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
};
