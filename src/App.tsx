import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "./models";
import { AuthGuard, RoutesWithNotFound } from "./utilities";
import { LoadingSpinner } from "./components";
import { AxiosInterceptor } from "./interceptors";
import { Provider } from "react-redux";
import { store } from "./redux";

const NewsPage = lazy(() => import('./pages/NewsPage/NewsPage'));
const Login = lazy(() => import('./pages/Login/Login'));
const Register = lazy(() => import('./pages/Register/Register'));
const Private = lazy(() => import('./pages/Private/Private'));

AxiosInterceptor();

function App() {
  return (
    <Suspense fallback={<LoadingSpinner/>}>
      <Provider store={store}>
        <BrowserRouter>
          <RoutesWithNotFound>
            <Route path="/" element={<Navigate replace to={PublicRoutes.HOME}/>} />   
            <Route path={PublicRoutes.HOME} element={<NewsPage />} />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
            <Route path={PublicRoutes.REGISTER} element={<Register />} />
            <Route element={<AuthGuard/>}>
              <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
            </Route>
          </RoutesWithNotFound>
        </BrowserRouter>
      </Provider>
    </Suspense>
  )
}

export default App