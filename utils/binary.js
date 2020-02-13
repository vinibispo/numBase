export const getNumberToBinary = (number) =>{
    console.log(number)
    if(number == ''){
        number = 0
    }
    number = Number(number)
    return number.toString(2)
}