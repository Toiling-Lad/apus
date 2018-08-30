import { connect } from 'react-redux'
import { createStackNavigator } from 'react-navigation'
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers'

import RepoList, { IState, INavReducer } from '../components/RepoList'
import ItemInfo from '../components/ItemInfo'

export interface IMapStateToProps {
  (state: IState): { state: INavReducer }
}

const navigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  (state: any) => state.navReducer
)

const RootNavigator = createStackNavigator({
  RepoList: { screen: RepoList },
  ItemInfo: { screen: ItemInfo }
})

const App: any = reduxifyNavigator(RootNavigator, 'root')

const mapStateToProps: IMapStateToProps = (state: IState) => ({
  state: state.navReducer
})

const AppWithNavigationState: any = connect(mapStateToProps)(App)

export { RootNavigator, AppWithNavigationState, navigationMiddleware }
