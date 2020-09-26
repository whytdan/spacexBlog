import { 
  FETCH_LAUNCHES_START, 
  FETCH_LAUNCHES_SUCCESS, 
  FETCH_LAUNCHES_ERROR } from '../actions/constants';


const initialState = {
  launches: [],
  loading: false,
  error: null
}

export default function launchesReducer(state = initialState, action){
  switch (action.type) {
    case FETCH_LAUNCHES_START:
      return {
        ...state, 
        loading: true
      }
    case FETCH_LAUNCHES_SUCCESS:
      return {
        ...state,
        launches: action.launches,
        loading: false,
      }
    case FETCH_LAUNCHES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state;
  }
}





