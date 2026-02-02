import { CircularProgress } from "@mui/material";
import { Navigate } from "react-router";

import { useAppSelector } from "../store/hooks";

import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: Props) => {
  const { isAuthenticated, loading } = useAppSelector((state) => state.user);

  if (loading === "pending") {
    return <CircularProgress />;
  }
  if (!isAuthenticated) {
    return <Navigate to="/user/login" replace />;
  }

  return <>{children}</>;
};
