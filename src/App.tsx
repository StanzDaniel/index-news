import { Suspense } from "react"
import { TopNews } from "./pages"

function App() {
  return (
    <Suspense fallback={"loading..."}>
      <TopNews />
    </Suspense>
  )
}

export default App