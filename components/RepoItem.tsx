import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export interface IRepoItem {
  name: string
  id: number
  stargazers_count: number
}

const RepoItem = (item: IRepoItem) => {
  const { name, id, stargazers_count } = item

  return (
    <View style={styles.item}>
      <Text style={styles.title}>{name}</Text>
      <Text>{id}</Text>
      <Text style={styles.stars}>{`${stargazers_count} stars`}</Text>
    </View>
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
