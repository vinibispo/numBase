import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Text, TextInput} from 'react-native'
import { getDecimalToHexa, getHexaToDecimal } from '../../utils'
export default HexaToDecimal = () =>{
    const [decimal, setDecimal] = useState(0)
    const [hexadecimal, setHexaDecimal] = useState('')
    useEffect(()=>{setHexaDecimal(getDecimalToHexa(decimal))},
    [decimal]) 
    return(
        <View style={styles.container}>
        <Text style={styles.title}>Conversor</Text>
        <TextInput value={decimal} style={styles.number} placeholder={"Decimal"} onChangeText={value => setDecimal(value)} keyboardType={"numeric"} placeholderTextColor={"#0abcde"}></TextInput>
        <TextInput style={styles.number} value={hexadecimal}></TextInput>
    </View>
    )
}
const styles = StyleSheet.create({container:{
    backgroundColor: 'rgb(50, 50, 50)',
    flex: 1
},
title: {
    fontWeight: 'bold',
    fontSize: 60,
    color: '#fff'
},
number:{
    color: '#0abcde',
    fontWeight: 'bold',
    fontSize: 48
}
})