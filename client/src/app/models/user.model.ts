export interface UserModel {
    first_name: string,
    last_name: string,
    user_id: string,
    email: string,
    password: string,
    city: string | null,
    street: string | null
    role?:number
}