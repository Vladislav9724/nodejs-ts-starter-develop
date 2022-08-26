
class User1 {
    get fullName(): string {
       return this.name + ' ' + this.surname
    }
    set fullName(fullName:string) {
        const [name, surname] = fullName.split(' ')
        this.name = name
        this.surname = surname

    }

    constructor(
        private name :string,
        private surname: string,
        protected _isAdmin : boolean = false) { }
    isAdmin (): boolean
    {
        return this._isAdmin
    }
}
export const max = new User1('Vlad', 'Tsyapka', true)

if(max.isAdmin()){
    console.log('Hello Admin ' + max.fullName)
}

