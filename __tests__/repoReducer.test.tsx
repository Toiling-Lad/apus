import repoReducer, {
  initialState,
  GET_REPOS_FAIL
} from '../reducers/repoReducer'

it('handles GET_REPOS_FAIL action', () => {
  expect(repoReducer(initialState, GET_REPOS_FAIL)).toEqual({
    loading: true,
    repos: []
  })
})
