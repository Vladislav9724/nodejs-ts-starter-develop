
interface Iauto {
    color: string,
    kpp: string,
    type: string
}

interface ImakeOlder {
    (auto: Iauto): Iauto
}

const outputTypeAuto: ImakeOlder = (auto: Iauto):Iauto => {
    return Object.assign ({
      auto
    })
}

const auto: Iauto = {
    color: 'red',
    kpp: 'auto',
    type: 'sedan',

}

const typeAuto = outputTypeAuto(auto)

console.log(typeAuto);