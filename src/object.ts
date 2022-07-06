
interface Iauto {
    color: string,
    kpp: string,
    type: string
}

interface Iauto_2 {
    color: string,
    kpp: string,
    type: string,
    stateNumber: string
}
interface IoutputTypeAuto {
    (auto: Iauto): Iauto_2
}

const outputTypeAuto: IoutputTypeAuto = (auto: Iauto):Iauto_2 => {
    return Object.assign( auto, {stateNumber: 'AO 24-13 EM'} )
}

const auto: Iauto = {
    color: 'red',
    kpp: 'auto',
    type: 'sedan',

}

const typeAuto = outputTypeAuto(auto)

console.log(typeAuto);