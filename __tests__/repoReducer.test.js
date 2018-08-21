import repoReducer, {
  initialState,
  GET_REPOS,
  GET_REPOS_SUCCESS,
  GET_REPOS_FAIL
} from '../reducers/repoReducer'

it('handles GET_REPOS_FAIL action', () => {
  expect(repoReducer(initialState, GET_REPOS_FAIL)).toEqual({
    repos: []
  })
})
