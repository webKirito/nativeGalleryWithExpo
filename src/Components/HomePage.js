import React, {Component} from 'react'
import {View} from 'react-native'
import Header from './Header'
import Gallery from './Gallery'




export default class HomePage extends Component {
  
  constructor() {
    super()
    this.state = {
      imageArr : []
    }  
  }

  static navigationOptions = {
      title : 'Home'
  }

  componentDidMount = async () => {
    const CLIENT_ID = 'cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0'
    try {
      const resp = await fetch(`https://api.unsplash.com/photos/?client_id=${CLIENT_ID}`)
      const imageArr = await resp.json()
      this.setState({ imageArr })
    } catch (e) {
      console.log(e)
    }
  }
  
  render() {
    return (
      <View style = {{flex : 1}}>
       <Header />
       <Gallery imageArr = {this.state.imageArr}/>
      </View> 
    );
  }
}

