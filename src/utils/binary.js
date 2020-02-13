export const getDecimalToBinary = (number) =>{
    if(number === ''){
        number = 0
    }
    number = Number(number)
    return number.toString(2)
}
