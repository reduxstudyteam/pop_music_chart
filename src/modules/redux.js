import { applyMiddleware, combineReducers, createStore } from "redux";

import thunk from "redux-thunk";

import {  REACT_APP_API_KEY, 
          REACT_APP_API_BASE_URL,
          REACT_APP_API_GET_TOP_ARTIST_METHOD,
          REACT_APP_API_GET_TOP_TRACK_METHOD,
          REACT_APP_API_SEARCH_ARTIST_METHOD
       } from "../utils/secret"

import Axios from "axios"

// actions.js
const GET_DATA = "GET_DATA";
const SEARCH_DATA = "SEARCH_DATA";
const GET_SEARCH_NAME = "GET_SEARCH_NAME";
const GET_SEARCH_RESULT = "GET_SEARCH_RESULT";
const IS_SEARCHED = "IS_SEARCHED";

export const getData = apidata => ({
  type: "GET_DATA",
  apidata
});

export const searchData = searchdata => ({
  type: "SEARCH_DATA",
  searchdata
})

export const getSearchName = searchname => ({
  type: "GET_SEARCH_NAME",
  searchname
})

export const getSearchResult = searchresult => ({
  type: "GET_SEARCH_RESULT",
  searchresult
})

//초기화를위한 액션생성자
export const isSearched = () => ({
  type: "IS_SEARCHED"
})

export const getArtistChartAPI = () => async dispatch => {
  const url = `${REACT_APP_API_BASE_URL}?method=${REACT_APP_API_GET_TOP_ARTIST_METHOD}&page=1&limit=50&api_key=${REACT_APP_API_KEY}&format=json`;
  Axios.get(url).then(response => {
    dispatch(getData(response.data.artists.artist));
  });
};

export const getTrackChartAPI = () => async dispatch => {
  const url = `${REACT_APP_API_BASE_URL}?method=${REACT_APP_API_GET_TOP_TRACK_METHOD}&page=1&limit=50&api_key=${REACT_APP_API_KEY}&format=json`;
  Axios.get(url).then(response => {
    dispatch(getData(response.data.tracks.track));
  });
};

export const getSearchArtistAPI = artist => async dispatch => {
  const url = `${REACT_APP_API_BASE_URL}?method=${REACT_APP_API_SEARCH_ARTIST_METHOD}&artist=${artist.name}&page=1&limit=50&api_key=${REACT_APP_API_KEY}&format=json`;
  Axios.get(url).then(response => {
    dispatch(searchData(response.data.results.artistmatches.artist));
    dispatch(getSearchName(response.data.results["opensearch:Query"].searchTerms));
    dispatch(getSearchResult(response.data.results["opensearch:totalResults"]));
    // 모든데이터를 가져온뒤 초기화 리듀서 디스패치
    dispatch(isSearched());
  })
  .catch(error => {
    console.error('검색어를 입력해주세요 : ' ,error)
    alert('검색어를 입력해 주세요')
  });
}

// reducers.js
export const apidata = (state = [], action) => {
  switch (action.type) {
    case GET_DATA:
      return action.apidata
    default:
      return state;
  }
};

export const searchdata = (state = [], action) => {
  switch (action.type) {
    case SEARCH_DATA:
      return {artists: action.searchdata}
    case GET_SEARCH_NAME:
      return Object.assign({},state,{searchName: action.searchname})
    case GET_SEARCH_RESULT:
      return Object.assign({},state,{searchResult: action.searchresult})
    // 초기화 시켜주는 리듀서
    case IS_SEARCHED:
      return state = {}
    default:
      return state;
  }
};

export const reducers = combineReducers({ apidata, searchdata });

// store.js
export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState, applyMiddleware(thunk));
  return store;
}

export const store = configureStore();
