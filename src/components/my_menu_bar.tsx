 import { createBrowserRouter, RouterProvider, Link, Outlet} from "react-router-dom";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function MyMenuBar() {

    return (
        <div>
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
        </div>
    )
}
export default MyMenuBar