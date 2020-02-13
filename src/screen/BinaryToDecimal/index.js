import React, { useState, useEffect } from 'react'
import {Text, TextInput, View, StyleSheet} from 'react-native'
import { getDecimalToBinary, getBinaryToDecimal } from '../../utils'

export default BinaryToDecimal = () =>{
    const [decimal, setDecimal] = useState(0)
    const [binary, setBinary] = useState(0)
    useEffect(()=>{
        setBinary(getDecimalToBinary(decimal))
    }, [decimal])
    useEffect(() => {
        setDecimal(getBinaryToDecimal(binary))
    }, [binary])
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Conversor</Text>
            <TextInput value={decimal} placeholder={"Decimal"} placeholderTextColor={"#0abcde"}></TextInput>
        </View>
    )
}
const styles = StyleSheet.create({container:{
    backgroundColor: '#000',
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