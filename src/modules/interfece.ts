export interface IUser {
    name: string
    age: number,
    address: IAddress
    married?: boolean
}

export interface IAddress {
    city: string
    prospectus: string
    house: number
    apartment: number

}

export interface IGetKey {
    getKey(): string []
    userVlad: IUser

}