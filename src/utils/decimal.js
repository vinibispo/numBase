export const getBinaryToDecimal = (binary) =>{
    return parseInt(binary, 2)
}
export const getHexaToDecimal = (hexa) => {
    // if(hexa === ''){
        // hexa = '0'
    // }
    return parseInt(hexa, 16)
}