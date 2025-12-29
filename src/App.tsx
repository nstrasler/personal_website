import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from './pages/home.tsx'
import About from './pages/about.tsx'
import Projects from './pages/projects.tsx'
import Admin from "./pages/admin.tsx";
import { ThemeProvider } from "@/components/theme-provider"
import MyMenuBar from '@/components/my_menu_bar.tsx';
import CurrentUserLabel from "./components/current_user_label.tsx";

const RootLayout = () => (
  <div>
    <div className="sticky top-0 z-50 bg-background w-full">
      <CurrentUserLabel />
      <MyMenuBar />
    </div>
    <Outlet/>
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