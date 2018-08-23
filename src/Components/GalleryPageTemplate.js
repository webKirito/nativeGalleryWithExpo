import React from 'react'
import { StyleSheet, Image, View , Button} from 'react-native'
import WinSize from '../config'

export default GalleryPageTemplate = (props) => {
    const {header , button, container, img} = styles
    const {navigation} = props
    const url = navigation.getParam('url')
    return (
      <View style={container}>
        <View style={header}>
            <Button style={button} onPress = {() => { navigation.navigate('Home') }} title = {"Home Page"}/>
        </View>
        <Image style={img} source = {{uri : url}}>

        </Image>
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
    justifyContent: 'flex-start',
    backgroundColor: 'blue',
  },
  button : {
      fontSize : 20,
      textAlign : 'center',
      backgroundColor : 'white',
      width: WinSize.width / 1.4,
      borderRadius : 10,
  },
  container : {
    flex: 1,
    flexDirection : 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  img : {
    height: WinSize.height * percent(80),
    width : WinSize.width,
  },
});