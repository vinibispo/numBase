/* eslint-disable keyword-spacing */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import {Text, View, TextInput, StyleSheet, TouchableOpacity, Button} from 'react-native'
import {getDecimalToBinary, getBinaryToDecimal} from './utils'
const App = () =>{
const [number, setNumber] = useState('')
const [bin, setBin] = useState('')
useEffect(()=>{
  if(!(number === '' && bin !== '')){
    setBin(getDecimalToBinary(number))
  }
}, [number])
useEffect(()=>{
  if(!(bin === '' && number !== '')){
    setNumber(getBinaryToDecimal(bin))
  }
   }, [bin])
const handleNumber = value => setNumber(value)
  return(
    <View style ={styles.container}>
      <Text style={styles.title}>Conversor</Text>
      <TextInput
        placeholderTextColor={"#0abcde"}
          style={styles.number} placeholder={"Número"} keyboardType={"numeric"} value={number} onChangeText={handleNumber}
          ></TextInput>
      <TextInput style={styles.number}value={bin} placeholder={"Binário"}></TextInput>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  title:{
    fontSize: 48,
    color: "#fff",
    textAlign: "center"
  },
  number:{
    fontWeight: "bold",
    fontSize: 30,
    color: "#0abcde",
  },
  button:{
    backgroundColor: '#ccc',
    color: '#000',
    width: 100,
    height: 50
  }
})
export default App