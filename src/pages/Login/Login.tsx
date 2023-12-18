import { Suspense } from "react"
import { LoginForm, NavbarLogin } from "./components"
import { LoadingSpinner } from "@/components"


function Login() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <NavbarLogin/>
      <LoginForm />
    </Suspense>
  )
}
export default Login