import { applyMiddleware, combineReducers, createStore } from "redux";

import thunk from "redux-thunk";

import {  REACT_APP_API_KEY, 
          REACT_APP_API_BASE_URL,
          REACT_APP_API_GET_TOP_ARTIST_METHOD,
          REACT_APP_API_GET_TOP_TRACK_METHOD
       } from "../utils/secret"

import Axios from "axios"

// actions.js
export const getData = apidata => ({
  type: "GET_DATA",
  apidata
});


export const getArtistChartAPI = () => async dispatch => {
  const url = `${REACT_APP_API_BASE_URL}?method=${REACT_APP_API_GET_TOP_ARTIST_METHOD}&page=1&limit=50&api_key=${REACT_APP_API_KEY}&format=json`;
  Axios.get(url).then(response => {
    console.log(response);
    dispatch(getData(response.data.artists.artist));
  });
};

export const getTrackChartAPI = () => async dispatch => {
  const url = `${REACT_APP_API_BASE_URL}?method=${REACT_APP_API_GET_TOP_TRACK_METHOD}&page=1&limit=50&api_key=${REACT_APP_API_KEY}&format=json`;
  Axios.get(url).then(response => {
    console.log(response);
    dispatch(getData(response.data.tracks.track));
  });
};

// reducers.js
export const apidata = (state = [], action) => {
  switch (action.type) {
    case "GET_DATA":
      return action.apidata;
    default:
      return state;
  }
};

export const reducers = combineReducers({ apidata });

// store.js
export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState, applyMiddleware(thunk));
  return store;
}

export const store = configureStore();
