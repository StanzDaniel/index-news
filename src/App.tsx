import { Suspense } from "react"
import { NewsPage } from "./pages"

function App() {
  return (
    <Suspense fallback={"loading..."}>
      <NewsPage />
    </Suspense>
  )
}

export default App