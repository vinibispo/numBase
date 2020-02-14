export const getDecimalToHexa = (number) => {
    if(number === ''){
        number = 0
    }
    number = Number(number)
    return number.toString(16).toUpperCase()
}