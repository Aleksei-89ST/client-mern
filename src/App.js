import { Layout } from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import {
  AddPostPage,
  EditPostPage,
  LoginPage,
  MainPage,
  PostPage,
  PostsPage,
  RegisterPage,
} from "./pages";
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMe } from "./redux/features/auth/authSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe())
  },[dispatch])

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="posts" element={<PostsPage />} />
        <Route path=":id" element={<PostPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path=":id/edit" element={<EditPostPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="new" element={<AddPostPage />} />
      </Routes>
      <ToastContainer position="bottom-right"/>
    </Layout>
  );
}

export default App;
