import { Suspense } from "react";
import { NavbarRegister, RegisterForm } from "./components";
import { LoadingSpinner } from "@/components";

function Register() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <NavbarRegister/>
      <RegisterForm />
    </Suspense>
  );
}
export default Register