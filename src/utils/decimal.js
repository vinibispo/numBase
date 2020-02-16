export const getBinaryToDecimal = (binary) =>{
    binary = String(binary)
    
    let number = `${parseInt(binary, 2)}`
    if(number === "NAN"){
        number = '0'
        
    }
    return number
}
export const getHexaToDecimal = (hexa) => {
    // if(hexa === ''){
        // hexa = '0'
    // }
    let decimal = parseInt(hexa, 16)
    if(decimal === "NaN"){
        decimal = '0'
    }
    return decimal
}