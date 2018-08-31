import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'

export interface IItem {
  name: string
  id: number
  stargazers_count: number
}

export interface IRepoItem {
  (props: { item: IItem; navigation: any }): JSX.Element
}

const RepoItem: IRepoItem = (props: { item: IItem; navigation: any }) => {
  const { name, id, stargazers_count } = props.item

  return (
    <TouchableHighlight
      underlayColor="#dddddd"
      onPress={() =>
        props.navigation.navigate('ItemInfo', { item: props.item })
      }>
      <View style={styles.item}>
        <Text style={styles.title}>{name}</Text>
        <Text>{id}</Text>
        <Text style={styles.stars}>{`${stargazers_count} stars`}</Text>
      </View>
    </TouchableHighlight>
  )
}

export const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 4
  },
  stars: {
    paddingBottom: 7
  }
})

export default RepoItem
