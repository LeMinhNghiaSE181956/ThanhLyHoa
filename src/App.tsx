import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout"; // Layout tổng thể
import Home from "./pages/home";  // Trang chủ
import Login from "./pages/login";  // Trang login

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // Sử dụng Layout tổng thể
      children: [
        {
          path: "",         // Trang chính khi vào "/"
          element: <Home /> // Trang chủ (Home)
        },
        {
          path: "login",    // Trang đăng nhập
          element: <Login /> // Trang Login
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
