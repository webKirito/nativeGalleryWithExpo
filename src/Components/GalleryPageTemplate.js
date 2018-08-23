import React from 'react'
import { StyleSheet, Image, View , Button} from 'react-native'
import WinSize from '../config'

export default GalleryPageTemplate = (props) => {
    const {container, img} = styles
    const {navigation} = props
    const url = navigation.getParam('url')
    const name = navigation.getParam('name')

    navigationOptions = {
        title : name
    }

    return (
      <View style={container}>
        <Image style={img} source = {{uri : url}}/>
      </View>
    );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    flexDirection : 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  img : {
    height: WinSize.height,
    width : WinSize.width,
  },
});