import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

export default Loading = () =>{
    return(
        <View style={styles.container}>
            <Text style={{color: '#fff', fontSize: 60}}>Bem vindo!</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1
    },
})