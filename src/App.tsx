import { Suspense } from "react"
import { NewsPage, NewsPageProvider } from "./pages"

function App() {
  return (
    <Suspense fallback={"loading..."}>
      <NewsPage />
    </Suspense>
  )
}

export default App