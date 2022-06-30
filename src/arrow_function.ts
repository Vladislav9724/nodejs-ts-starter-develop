
const ask = (question:string, yes: any, no: any): string => {
    if(question === "Я согласен."){
        return yes()
    }   return no()
}

const yes = () => {return "Вы согласились."}
const no  = () => {return "Вы отменили выполнение."}
const question = "Я согласен."

const res = ask (question, yes, no)

console.log(`Res = ${res}`);
console.log(typeof (res));

