import { NavbarProvider } from "@/context";
import { ReactNode } from "react";
import { NavbarContainer } from "./NavbarContainer";

function Navbar({children}: {children: ReactNode}) {
  return (
    <NavbarProvider>
      <NavbarContainer>
        {children}
      </NavbarContainer>
    </NavbarProvider>
  );
}
export default Navbar 