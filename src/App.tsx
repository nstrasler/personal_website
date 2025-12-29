 import { createBrowserRouter, RouterProvider, Link, Outlet } from "react-router-dom";
import Home from './pages/home.tsx'
import About from './pages/about.tsx'
import Projects from './pages/projects.tsx'
import Admin from "./pages/admin.tsx";
import { MyContactInfoInput } from '@/components/my_contact_info_input.tsx';
import { ThemeProvider } from "@/components/theme-provider"
import MyMenuBar from '@/components/my_menu_bar.tsx';

const RootLayout = () => (
  <>
    <div>
      <MyMenuBar />
    </div>
    <div className='flex flex-col items-center mb-40'>
        <MyContactInfoInput />
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