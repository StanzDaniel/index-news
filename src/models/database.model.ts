const BACKEND = "https://backend-index-news.onrender.com/"

export enum database {
  REGISTER = `${BACKEND}register`,
  LOGIN = `${BACKEND}login`,
  VALIDATE_TOKEN = `${BACKEND}validate`,
  DELETE_USER = `${BACKEND}deleteuser`,
  UPDATE_USER = `${BACKEND}updateuser`,
  CHANGE_PASSWORD = `${BACKEND}changepassword`,
  HISTORY = `${BACKEND}history`,
  READ_LATER = `${BACKEND}readlater`,
  ACCESS_KEY = "$2b$10$xiC0skpsaZQ9z2IT3gktJ.n16oVJYK.IVU7MgJGr7x1kpll1gFoLm",
  IMAGE = `${BACKEND}setimage`,
  SERVER_IMAGE = `${BACKEND}uploads/`,
}