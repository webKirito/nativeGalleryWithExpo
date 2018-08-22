import React, {Component} from 'react'
import HomePage from './src/Components/HomePage'
import {createStackNavigator} from 'react-navigation'
import {Text} from 'react-native'




const Routes = createStackNavigator({
  Home : HomePage,
  NoHome : HomePage
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

