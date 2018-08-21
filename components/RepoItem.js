import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const RepoItem = ({ item }) => {
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
    paddingBottom: 8
  }
})

export default RepoItem
