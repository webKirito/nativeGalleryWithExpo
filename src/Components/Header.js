import React, {Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import WinSize from '../config'

export default Header = () => {
    const {header , headerTxt} = styles
    console.log(WinSize)
    return (
      <View style={header}>
        <Text style={headerTxt}>Just Gallery</Text>
      </View>
    );
}

function percent(num) {
  return num/100;
}

const styles = StyleSheet.create({
  header: {
    height: WinSize.height * percent(20),
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  headerTxt : {
      fontSize : 20,
      textAlign : 'center',
      backgroundColor : 'white',
      width: WinSize.width / 1.4,
      borderRadius : 10
  },
});