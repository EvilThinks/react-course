import { handleActions } from 'redux-actions';
import { searchRequest, searchSuccess, searchFailure } from '../actions/search';

export default handleActions(
  {
    [searchRequest.toString()]: state => ({
      ...state,
      isFetching: true
    }),
    [searchSuccess.toString()]: (state, action) => ({
      ...state,
      isFetching: false,
      series: action.payload
    }),
    [searchFailure.toString()]: (state, action) => ({
      ...state,
      isFetching: false,
      error: action.error
    })
  },
  { isFetching: false, series: [], error: null }
);
