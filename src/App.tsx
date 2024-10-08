import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserProvider } from './context/UserContext'; // Import UserProvider
import Login from './pages/login';
import Home from './pages/home';
import Layout from './components/layout/Layout';
import Register from './pages/register';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <div>404 - Trang không tìm thấy!</div>,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
  ]);

  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
