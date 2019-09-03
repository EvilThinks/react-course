import { handleActions } from 'redux-actions';
import { showRequest, showSuccess, showFailure } from '../actions/show';

export default handleActions(
  {
    [showRequest.toString()]: state => ({
      ...state,
      isFetching: true
    }),
    [showSuccess.toString()]: (state, action) => ({
      ...state,
      isFetching: false,
      show: action.payload
    }),
    [showFailure.toString()]: (state, action) => ({
      ...state,
      isFetching: false,
      error: action.error
    })
  },
  { isFetching: false, show: [], error: null }
);
