import React, {Component} from 'react'
import { StyleSheet, Text, View, Image, ScrollView , TouchableHighlight} from 'react-native'
import WinSize from '../config'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection : 'row',
    alignItems: 'center',
    flexWrap : 'wrap',
    justifyContent: 'space-around',
    backgroundColor: 'blue'
  },
  item : {
    height : WinSize.height / 3,
    width: WinSize.width / 2.1,
    flexDirection : 'column',
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor: 'white',
    borderRadius : 10,
    marginVertical : 10,
    paddingVertical : 10,
  },
  img : {
    height : WinSize.height / 3 * 0.75,
    width: WinSize.width / 2.4,
  },
  txt : {
    paddingVertical : 10,
    width : 100,
    fontSize: 10,
    textAlign : 'center'
  },
  scrollArea : {
    flex : 2
  }
});

const {img , container , txt , scrollArea, item} = styles

const GalleryItem = (props) => {
    return (
      <TouchableHighlight onPress = {() => props.handleClick(props.url)}>
        <View style = {item}>
          <Image source={{uri : props.url}} style = {img}></Image>
          <Text style={txt}>{props.name}</Text>
        </View>
      </TouchableHighlight>
    )
}

export default Gallery = (props) => {
    return (
      <ScrollView style = {scrollArea}>
        <View style = {container}>
        {
          props.imageArr.length ? props.imageArr.map((item, index) => <GalleryItem 
                    handleClick = {props.onGalleryItemClick /*props.onGalleryItemClick(item.urls.small*/} 
                    key={index} 
                    name = {item.user.name} 
                    url = {item.urls.small} />) : <Text>{"Nothing"}</Text>
        }
        </View>
      </ScrollView>
    );
}

