import React, { Component } from 'react'
import { Text } from 'react-native'


export default class ItemInfo extends Component {
  static navigationOptions = ({navigation}) => {
    const item = navigation.getParam('item')

    return {
      title: item.name
    }
  }

  render() {
    return <Text>ItemInfo</Text>
  }
}
