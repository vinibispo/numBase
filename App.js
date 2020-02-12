import React from 'react'
import {Text, Button, View} from 'react-native'
export default App = () =>{
  return(
    <View>
      <Text>Bem vindo!</Text>
      <Button onPress={() => alert('Você clicou em mim')}>Clique em mim</Button>
    </View>
  )
}