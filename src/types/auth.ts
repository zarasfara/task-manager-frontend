export interface User {
    id: number,
    name: string,
    surname: string,
    email: string,
    nickname: string,
    avatar: string
    roles: Role[]
}

export type Role = 'admin' | 'user' | 'programmer';