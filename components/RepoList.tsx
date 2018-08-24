import React, { Component } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import RepoItem, { IRepoItem } from './RepoItem'

import { listRepos } from '../reducers/repoReducer'

export interface IReduxProps {
  listRepos: (x: string) => void
  repos: Array<IRepoItem>
}

class RepoList extends Component<IReduxProps, {}> {
  componentDidMount() {
    this.props.listRepos('Toiling-Lad')
  }

  render() {
    const { repos } = this.props

    return (
      <FlatList
        style={styles.container}
        data={repos}
        keyExtractor={(repo: IRepoItem) => repo.id.toString()}
        renderItem={({ item }) => <RepoItem {...item} />}
      />
    )
  }
}

const mapStateToProps = (state: any) => {
  let storedRepositories = state.repos.map((repo: IRepoItem) => ({
    key: repo.id,
    ...repo
  }))
  return {
    repos: storedRepositories
  }
}

const mapDispatchToProps = {
  listRepos
}

export const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoList)
