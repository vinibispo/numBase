export const getBinaryToDecimal = (binary) =>{
    if(binary === ''){
        binary = '0'
    }
    return parseInt(binary, 2)
}
export const getHexaToDecimal = (hexa) => {
    return parseInt(hexa, 16)
}