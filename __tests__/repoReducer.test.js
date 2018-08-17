
import repoReducer, {initialState} from '../reducers/repoReducer';

it('returns the same state on an unhandled action', () => {
  expect(repoReducer(initialState, {type: '_NULL'})).toMatchSnapshot();
});