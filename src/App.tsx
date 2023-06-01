import { Suspense } from "react"
import { NewsPage } from "./pages"
import AxiosInterceptor from "./interceptors/axios.interceptor";

AxiosInterceptor();


function App() {
  return (
    <Suspense fallback={"loading..."}>
      <NewsPage />
    </Suspense>
  )
}

export default App