import { createBrowserRouter, RouterProvider, Link, Outlet } from "react-router-dom";
import Home from './pages/home.tsx'
import About from './pages/about.tsx'
import Projects from './pages/projects.tsx'

const RootLayout = () => (
  <div className="layout">
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
    </nav>
    <main>
      <Outlet />
    </main>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "projects", element: <Projects /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}