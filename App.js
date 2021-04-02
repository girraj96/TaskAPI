import React, { Component } from 'react'
import FlashMessage from 'react-native-flash-message'
import Routes from './src/Navigation/Routes'
import SplashScreen from 'react-native-splash-screen'
import store from './src/redux/store'
import { getUserData } from './src/utils/utils'
import { Provider } from 'react-redux'
import types from './src/redux/types'




const { dispatch } = store;

export default class App extends Component {


  componentDidMount() {
    getUserData().then((userData) => {
      if (userData) {
        dispatch({
          type: types.LOGIN,
          payload: userData 
        })
      }
    })
    SplashScreen.hide();
  }

  render() {
    return (
      <>
        <Provider store={store}>
          <Routes />
        </Provider>
        <FlashMessage position="top" />
      </>
    )
  }
}

