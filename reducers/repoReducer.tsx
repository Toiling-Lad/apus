export const GET_REPOS = 'my-awesome-app/repos/LOAD'
export const GET_REPOS_SUCCESS = 'my-awesome-app/repos/LOAD_SUCCESS'
export const GET_REPOS_FAIL = 'my-awesome-app/repos/LOAD_FAIL'

export interface IInitialState {
  repos: Array<any>
}

export interface IRepoReducer {
  loading: boolean
  repos: any[]
  error?: string
}

export interface IListRepos {
  type: string
  payload: {
    request: {
      url: string
    }
  }
}

// Teporary until moved higher
export const initialState: IInitialState = {
  repos: []
}

export default function repoReducer(
  state = initialState,
  action: any
): IRepoReducer {
  switch (action.type) {
    case GET_REPOS:
      return {
        ...state,
        loading: true
      }
    case GET_REPOS_SUCCESS:
      return {
        ...state,
        loading: false,
        repos: action.payload.data
      }
    case GET_REPOS_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching repositories'
      }
    default:
      return {
        ...state,
        loading: true
      }
  }
}

export function listRepos(user: string): IListRepos {
  return {
    type: GET_REPOS,
    payload: {
      request: {
        url: `/users/${user}/repos`
      }
    }
  }
}
