import { PrivateRoutes } from "@/models"
import { Navigate, Route } from "react-router-dom"
import { RoutesWithNotFound } from "@/utilities"
import { lazy } from "react"

const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'))
const HistoryPage = lazy(() => import('./pages/HistoryPage/HistoryPage'))
const ReadLaterPage = lazy(() => import('./pages/ReadLaterPage/ReadLaterPage'))

function Private() {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD}/>} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
      <Route path={PrivateRoutes.HISTORY} element={<HistoryPage />} />
      <Route path={PrivateRoutes.READLATER} element={<ReadLaterPage />} />
    </RoutesWithNotFound>
  )
}
export default Private