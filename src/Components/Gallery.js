import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight} from 'react-native'
import WinSize from '../config'

const shadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.27,
  shadowRadius: 1.81,
  elevation: 2,
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flexDirection : 'row',
    alignItems: 'center',
    flexWrap : 'wrap',
    justifyContent: 'space-around',
  },
  item : {
    height : WinSize.height / 2.7,
    width: WinSize.width / 2.1,
    flexDirection : 'column',
    alignItems : 'center',
    justifyContent : 'flex-start',
    backgroundColor: 'white',
    borderRadius : 10,
    marginVertical : 10,
    paddingVertical : 10,
    ...shadow
  },
  img : {
    marginTop: 10,
    height : WinSize.height / 3 * 0.75,
    width: WinSize.width / 2.4,
  },
  txt : {
    paddingVertical : 10,
    width : 100,
    fontSize: 14,
    textAlign : 'center'
  },
});

const {img , container , txt , item} = styles

const GalleryItem = (props) => {
    return (
      <TouchableHighlight onPress = {() => props.handleClick(props.fullSizeUrl, props.name)}>
        <View style = {item}>
          <Image source={{uri : props.url}} style = {img}></Image>
          <Text style={txt}>{props.name}</Text>
        </View>
      </TouchableHighlight>
    )
}

export default Gallery = (props) => {
    return (
      <ScrollView>
        <View style = {container}>
        {
          props.imageArr.length ? props.imageArr.map((item, index) => <GalleryItem 
                    handleClick = {props.onGalleryItemClick} 
                    key={index} 
                    name = {item.user.name} 
                    url = {item.urls.small}
                    fullSizeUrl = {item.urls.regular} />) :
                    null 
        }
        </View>
      </ScrollView>
    );
}

