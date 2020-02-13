/* eslint-disable keyword-spacing */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import {Text, View, TextInput, StyleSheet, TouchableOpacity, Button} from 'react-native'
import {getNumberToBinary} from './utils'
const App = () =>{
const [number, setNumber] = useState('')
const [bin, setBin] = useState('Binário')
const handleNumber = value => setNumber(value)
  return(
    <View style ={styles.container}>
      <Text style={styles.title}>Conversor {number}</Text>
      <TextInput placeholderTextColor={"#0abcde"} style={styles.number} placeholder={"Número"} keyboardType={"numeric"} value={number} onChangeText={handleNumber}></TextInput>
  <Text style={styles.number}>{bin}</Text>
  <Button style={styles.button} onPress={() => setBin(getNumberToBinary(number))} title={"Transformar em binário"}></Button>
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