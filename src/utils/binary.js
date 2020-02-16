export const getDecimalToBinary = (number) =>{
    // if(number === ''){
        // number = 0
    // }
    number = Number(number)
    let binary = number.toString(2)
    if (binary === "NaN"){
        binary = "0"
    }
    return binary
}
