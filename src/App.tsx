import { Route, Routes } from "react-router-dom";
import "./App.css";
import { StipePage } from "./layouts/StipePage";
import { HomePage } from "./layouts/HomePage";
import { LoginPage } from "./layouts/LoginPage";
import { RegisterPage } from "./layouts/RegisterPage";
import { NewPost } from "./layouts/NewPost";
import { ProtectedRoute } from "./providers/protected-route";
import { MainLayout } from "./layouts/MainLayout";

import { useEffect } from "react";

import { initSocket } from "./socket/initSocket";
import { useAppDispatch } from "./store/hooks";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    initSocket(dispatch);
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/user/login" element={<LoginPage />} />
      <Route path="/user/register" element={<RegisterPage />} />
      <Route element={<MainLayout />}>
        <Route index path="/" element={<StipePage />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/post"
          element={
            <ProtectedRoute>
              <NewPost />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
