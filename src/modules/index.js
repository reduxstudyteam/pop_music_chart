import { handleActions, createAction } from 'redux-actions';

import { REACT_APP_API_KEY, REACT_APP_API_BASE_URL } from "../../utils/secret";

import axios from 'axios';

function getTrackAPI(method){
  return axios.get(`${REACT_APP_API_BASE_URL}?method=${method}&page=1&limit=50&api_key=${REACT_APP_API_KEY}&format=json`);
}

const GET_TRACK_CHART = 'GET_TRACK_CHART';
const GET_ARTIST_CHART = 'GET_ARTIST_CHART';
const GET_ARTIST_DETAIL = 'GET_ARTIST_DETAIL';
const GET_POST_FAILURE = 'GET_POST_FAILURE';

export const getTrackAPI = (method) => dispatch => {

  return getTrackAPI(method).then(
    (response) => {
      dispatch({
        type: GET_TRACK_CHART,
        payload: response
      })
    }
  ).catch(err => {
      dispatch({
        type: GET_POST_FAILURE,
        payload: err
      });
  })
}

const initialState = {
  err: false,
  data: {
    title: '',
    body: '',
  }
}

export default handleActions({
  [GET_TRACK_CHART]: (state, action) => {
    const {title,body} = action.payload.data
    return{
      ...state,
      pending: false,
      data: {
        title, body
      }
    };
  },
  [GET_POST_FAILURE]: (state,action) => {
    return {
      ...state,
      pending: false,
      err: true
    }
  }
},initialState);