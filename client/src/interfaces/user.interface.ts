export interface User {
    name: string,
    lastName: string,
    userName: string,
    email: string,
    password: string,
    confirmPassword?: string,
    image?: string,
    token?: string,
};