import { News } from "./News.interface";

export interface User {
    name: string,
    lastName: string,
    userName: string,
    email: string,
    password: string,
    confirmPassword?: string,
    image?: '',
    token?: string,
    history?: News[],
    readLater?: News[],
};