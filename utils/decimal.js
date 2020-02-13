export const getBinaryToDecimal = (binary) =>{
    if(binary === ''){
        binary = '0'
    }
    return parseInt(binary, 2)
}