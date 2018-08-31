import React, { Component } from 'react'
import { Text } from 'react-native'
import { BackHandler } from 'react-native'

export interface IItemInfoProps {
  navigation: any
}

export interface IOnMainScreen {
  (props: IItemInfoProps): boolean
}
export interface IGoBack {
  (props: IItemInfoProps): void
}

export default class ItemInfo extends Component<IItemInfoProps, {}> {
  static navigationOptions = (props: IItemInfoProps) => {
    const item = props.navigation.getParam('item')
    return {
      title: item.name
    }
  }

  onMainScreen: IOnMainScreen = (props: IItemInfoProps) => {
    const routeName = props.navigation.state.routeName
    return routeName === 'RepoList'
  }

  goBack: IGoBack = (props: IItemInfoProps) => {
    props.navigation.goBack()
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', () => {
      if (!this.onMainScreen(this.props)) {
        this.goBack(this.props)
        return true
      }
      return false
    })
  }

  render() {
    return <Text>ItemInfo</Text>
  }
}
