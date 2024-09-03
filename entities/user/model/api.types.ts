export interface IUser {
    id: number;
    login: string;
    email: string;
    password?: string;
    createdData: Date;
}
export type userData = {
    user: IUser | null;
    token: string | null;
};
export interface IState {
    userData: userData;
    isLogged: boolean;
}
