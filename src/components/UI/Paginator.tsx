import { Box, Pagination } from "@mui/material";

interface PaginatorProps {
  page: number;
  count: number;
  onChange: (page: number) => void;
}

export const Paginator = ({ page, count, onChange }: PaginatorProps) => {
  if (count <= 1) return null;

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Pagination
        page={page}
        count={count}
        onChange={(_, value) => onChange(value)}
        color="primary"
      />
    </Box>
  );
};
