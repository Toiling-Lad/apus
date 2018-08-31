import React, { Component } from 'react'
import { FlatList, StyleSheet, ImagePropsIOS } from 'react-native'
import { connect } from 'react-redux'
import RepoItem, { IItem } from './RepoItem'

import { listRepos } from '../reducers/repoReducer'

export interface IProps {
  listRepos: (x: string) => void
  navigation: any
  repos: Array<IItem>
  screenProps?: any
}
export interface IState {
  navReducer: INavReducer
  repoReducer: IRepoReducer
}

export interface IRepoReducer {
  loading: boolean
  repos: Array<IItem>
  error?: string
}

export interface INavReducer {
  index: number
  isTransitioning: boolean
  key: string
  routes: Array<{ key: string; routeName: string }>
}

export interface IMapStateToProps {
  (state: IState): { repos: Array<IItem> }
}

class RepoList extends Component<IProps, IState> {
  componentDidMount() {
    this.props.listRepos('Futurice')
  }

  static navigationOptions = {
    title: 'RepoList'
  }

  render() {
    return (
      <FlatList
        style={styles.container}
        data={this.props.repos}
        keyExtractor={(repo: IItem) => repo.id.toString()}
        renderItem={({ item }) => (
          <RepoItem item={item} navigation={this.props.navigation} />
        )}
      />
    )
  }
}

const mapStateToProps: IMapStateToProps = (state: IState) => {
  let storedRepositories = state.repoReducer.repos.map((repo: IItem) => ({
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
