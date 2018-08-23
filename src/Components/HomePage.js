import React, {Component} from 'react'
import {View, AsyncStorage} from 'react-native'
import Gallery from './Gallery'


export default class HomePage extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      imageArr : []
    }  
  }

  fetchData = async () => {
    const CLIENT_ID = 'cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0'
        try {
          const resp = await fetch(`https://api.unsplash.com/photos/?client_id=${CLIENT_ID}`)
          const imageArr = await resp.json()
          this.setState({ imageArr })
          AsyncStorage.setItem(key, JSON.stringify(imageArr))
        } catch (e) {
          console.log(e)
        }
  }

  getFromStorage = async (key) => {
    try {
      const val = await AsyncStorage.getItem(key);
      if (val) {
        this.setState({
          imageArr: JSON.parse(val)
        })
      } else {
        await this.fetchData()
      }
    } catch (e) {
      console.log(e)
    }
  }

  static navigationOptions = {
      title : 'Just Gallery'
  }

  componentDidMount = async () => {
    await this.getFromStorage('imageArr')
  }
  
  onGalleryItemClick = (url, name) => {
    this.props.navigation.navigate('GalleryPageTemplate', {
      url,
      name
    });
  }

  render() {
    return (
      <View style = {{flex : 1}}>
       <Gallery imageArr = {this.state.imageArr} onGalleryItemClick={this.onGalleryItemClick}/>
      </View> 
    );
  }
}

