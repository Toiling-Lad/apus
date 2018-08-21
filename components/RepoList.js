import React, { Component } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import RepoItem from './RepoItem'

import { listRepos } from '../reducers/repoReducer'

class RepoList extends Component {
  componentDidMount() {
    this.props.listRepos('Toiling-Lad')
  }

  render() {
    const { repos } = this.props
    return (
      <FlatList
        styles={styles.container}
        data={repos}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={repo => <RepoItem {...repo} />}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

const mapStateToProps = state => {
  let storedRepositories = state.repos.map(repo => ({ key: repo.id, ...repo }))
  return {
    repos: storedRepositories
  }
}

const mapDispatchToProps = {
  listRepos
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoList)
