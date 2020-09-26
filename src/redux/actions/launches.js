import axios from 'axios'
import { FETCH_LAUNCHES_ERROR,
        FETCH_LAUNCHES_START,
        FETCH_LAUNCHES_SUCCESS
      } from './constants.js'



export function fetchLaunches(){
  return dispatch => {

    dispatch(fetchLaunchesStart());

    axios.get("https://api.spacex.land/rest/launches?limit=20") 
      .then(response => {
        
        console.log(response.data)
        dispatch(fetchLaunchesSuccess(response.data));

      })
      .catch(error => {
        console.log(error.response)
        dispatch(fetchLaunchesError(error.response));
      })
  }
}

export function fetchLaunchesSuccess(launches){
  return {
    type: FETCH_LAUNCHES_SUCCESS,
    launches: launches
  }
}

export function fetchLaunchesStart(){
  return {
    type: FETCH_LAUNCHES_START,
    loading: true
  }
}

export function fetchLaunchesError(error){
  return {
    type: FETCH_LAUNCHES_ERROR,
    error: error
  }
}