/* eslint-disable keyword-spacing */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import {Text, View, TextInput, StyleSheet} from 'react-native'
const App = () =>{
const [number, setNumber] = useState(0)
  useEffect(()=>{
    setNumber(number)
  }, [number])
  return(
    <View style ={styles.container}>
      <Text style={styles.title}>Conversor</Text>
      <TextInput placeholderTextColor={"#0abcde"} style={styles.number} placeholder={"Número"} keyboardType={"numeric"}></TextInput>
      <TextInput placeholderTextColor={"#0abcde"} style={styles.number} placeholder={"Binário"} keyboardType={"numeric"}>{number}</TextInput>
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
  }
})
export default App