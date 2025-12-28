import { createBrowserRouter, RouterProvider, Link, Outlet } from "react-router-dom";
import Home from './pages/home.tsx'
import About from './pages/about.tsx'
import Projects from './pages/projects.tsx'
import Admin from "./pages/admin.tsx";
import { FieldInput } from '@/components/ui/contact_info_input';
import { ThemeProvider } from "@/components/theme-provider"

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

const RootLayout = () => (
  <>
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
          <MenubarItem asChild>
            <Link to="/admin">Admin</Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
    <main>
      <Outlet />
    </main>
  </div>
    <div className='flex flex-col items-center mb-40'>
        <FieldInput />
    </div>
</>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "projects", element: <Projects /> },
      { path: "admin", element: <Admin /> }
    ],
  },
]);

export default function App() {
  return (
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router} />
  </ThemeProvider>
  );
}