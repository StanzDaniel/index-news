import { ReactNode } from "react"
import { Route, Routes } from "react-router-dom"

function RoutesWithNotFound({children}: {children: ReactNode}) {
  return (
    <Routes>
      {children}
      <Route path="*" element={<>NOT FOUND</>} />
    </Routes>
  )
}
export default RoutesWithNotFound