import { Suspense } from "react"
import { Login, NewsPage } from "./pages"
import AxiosInterceptor from "./interceptors/axios.interceptor";
import { BrowserRouter, Route, Routes } from "react-router-dom";

AxiosInterceptor();


function App() {
  return (
    <Suspense fallback={"loading..."}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewsPage />} />      
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<>NOT FOUND</>} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App