import { createBrowserRouter, RouterProvider, Link, Outlet } from "react-router-dom";
import Home from './pages/home.tsx'
import About from './pages/about.tsx'
import Projects from './pages/projects.tsx'

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

const RootLayout = () => (
  <div className="layout">
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Navigate</MenubarTrigger>
        <MenubarContent>
          <MenubarItem asChild>
            <Link to="/">Home</Link>
          </MenubarItem>
          <MenubarItem asChild>
            <Link to="/about">About</Link>
          </MenubarItem>
          <MenubarItem asChild>
            <Link to="/projects">Projects</Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
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