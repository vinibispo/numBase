export const getDecimalToHexa = (number) => {
    // if(number === ''){
    //     number = 0
    // }
    number = Number(number)
    let hexa = number.toString(16).toUpperCase()
    if(hexa === "NAN"){
        hexa = "0"
    }
    return hexa
}