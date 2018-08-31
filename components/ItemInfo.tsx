import React, { Component } from 'react'
import { Text } from 'react-native'

export interface INavigation {
  props: any
}

export default class ItemInfo extends Component {
  static navigationOptions = (navigation: INavigation) => {
    const item = navigation.props.getParam('item')

    return {
      title: item.name
    }
  }

  render() {
    return <Text>ItemInfo</Text>
  }
}
