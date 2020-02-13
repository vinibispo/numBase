import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import BinaryToDecimal from './screen/BinaryToDecimal';
import HexaToDecimal from './screen/HexaToDecimal'


const Drawer = createDrawerNavigator();

export default function Route() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Binário" component={BinaryToDecimal} />
        <Drawer.Screen name="Hexadecimal" component={HexaToDecimal} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}