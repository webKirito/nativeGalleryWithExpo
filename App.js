import React, {Component} from 'react'
import HomePage from './src/Components/HomePage'
import GalleryPageTemplate from './src/Components/GalleryPageTemplate'
import {createStackNavigator} from 'react-navigation'


const Routes = createStackNavigator({
  Home : HomePage,
  GalleryPageTemplate : GalleryPageTemplate
}, {
  initialRouteName : 'Home',
})


export default class App extends Component {
  render() {
    return (
      <Routes/>
    );
  }
}

