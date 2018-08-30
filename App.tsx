import React, { Component } from 'react'
import {
  createStore,
  applyMiddleware,
  combineReducers,
  Reducer,
  StoreEnhancer
} from 'redux'
import { createNavigationReducer } from 'react-navigation-redux-helpers'
import { Provider } from 'react-redux'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'
import {
  RootNavigator,
  AppWithNavigationState,
  navigationMiddleware
} from './navigators/AppNavigator'

import repoReducer from './reducers/repoReducer'

const client = axios.create({
  baseURL: 'https://api.github.com',
  responseType: 'json'
})

const appReducer: Reducer<any> = combineReducers({
  navReducer: createNavigationReducer(RootNavigator),
  repoReducer: repoReducer
})

const appMiddleware: StoreEnhancer<any> = applyMiddleware(
  axiosMiddleware(client),
  navigationMiddleware
)

const store = createStore(appReducer, appMiddleware)

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}
