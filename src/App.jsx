import {
  Navigate,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import SinglePage from "./pages/SinglePage";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import LoginPage from "./pages/LoginPage";
import RequireAuth from "./hoc/RequireAuth";
import { AuthProvider } from "./hoc/AuthProvider";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "about",
          element: <AboutPage />,
          children: [
            {
              path: "contacts",
              element: <div>Our contacts</div>,
            },
            {
              path: "team",
              element: <div>Our team</div>,
            },
          ],
        },
        {
          path: "about-us",
          element: <Navigate to={"/about"} replace />,
        },
        {
          path: "blog",
          element: <BlogPage />,
        },
        {
          path: "blog/:id",
          element: <SinglePage />,
        },
        {
          path: "blog/:id/edit",
          element: <EditPost />,
        },
        {
          path: "blog/new",
          element: (
            <RequireAuth>
              <CreatePost />
            </RequireAuth>
          ),
        },
        {
          path: "login",
          element: <LoginPage />,
        },
      ],
    },
  ]);

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={<Layout />}>
  //       <Route index element={<HomePage />} />
  //       <Route path="about" element={<AboutPage />}>
  //         <Route path="contacts" element={<p>Our contacts</p>} />
  //         <Route path="team" element={<p>Our team</p>} />
  //       </Route>
  //       <Route path="about-us" element={<Navigate to={"/about"} replace />} />
  //       <Route path="blog" element={<BlogPage />} />
  //       <Route path="blog/:id" element={<SinglePage />} />
  //       <Route path="blog/:id/edit" element={<EditPost />} />
  //       <Route
  //         path="blog/new"
  //         element={
  //           <RequireAuth>
  //             <CreatePost />
  //           </RequireAuth>
  //         }
  //       />
  //       <Route path="login" element={<LoginPage />} />
  //     </Route>
  //   )
  // );

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
