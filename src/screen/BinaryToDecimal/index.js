import React, { useState, useEffect } from 'react'
import {Text, TextInput, View, StyleSheet} from 'react-native'
import { getDecimalToBinary, getBinaryToDecimal } from '../../utils'

export default BinaryToDecimal = () =>{
    const [decimal, setDecimal] = useState(0)
    const [binary, setBinary] = useState(0)
    useEffect(()=>{
        setBinary(getDecimalToBinary(decimal))
    }, [decimal])
    // useEffect(() => {
        // setDecimal(getBinaryToDecimal(binary))
    // }, [binary]) 
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Conversor</Text>
            <TextInput value={decimal} style={styles.number} placeholder={"Decimal"} onChangeText={value => setDecimal(value)} keyboardType={"numeric"} placeholderTextColor={"#0abcde"}></TextInput>
            <TextInput style={styles.number} value={binary} placeholder={"Binário"} placeholderTextColor={"#0abcde"} onChangeText={value => setBinary(value)}></TextInput>
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