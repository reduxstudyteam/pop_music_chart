//--------------------
// import core
//--------------------
import React, { Component, Fragment } from "react";

//--------------------
// import third-party
//--------------------
import Axios from "axios";

//--------------------
// import presentation component
//--------------------
import AritstSearchComponent from "../component/ArtistSearch";
import SearchResultComponent from "../component/SearchResult";

//--------------------
// import util
//--------------------
import {
  REACT_APP_API_KEY,
  REACT_APP_API_BASE_URL,
  REACT_APP_API_SEARCH_ARTIST_METHOD
} from "../../utils/secret";

class ArtistSearchPage extends Component {
  constructor(props){
    super(props);
    this.state={
      name: "",
      pageNumber: 1,
      fetchDataItemLength: 50,
      fetchDataSource: [],
      fetchTotalResult: "",
      fetchSearchTerms: "",
    }
  }

  // --------------------
  
  // --------------------
  // componentDidMount() {
  //   this.fetchData(this.state.name);
  // }

  // --------------------
  
  // --------------------
  fetchData = (artist) => {
    const { pageNumber, fetchDataItemLength } = this.state;
    const url = `${REACT_APP_API_BASE_URL}?method=${REACT_APP_API_SEARCH_ARTIST_METHOD}&artist=${artist.name}&page=${pageNumber}&limit=${fetchDataItemLength}&api_key=${REACT_APP_API_KEY}&format=json`;
    Axios.get(url).then(response => {
      console.log(response);
      this.setState({
        fetchDataSource: response.data.results.artistmatches.artist,
        fetchSearchTerms: response.data.results["opensearch:Query"].searchTerms,
        fetchTotalResult: response.data.results["opensearch:totalResults"]
      });
    }).catch(error => {
      console.error('검색어를 입력해주세요 : ' ,error)
      alert('검색어를 입력해 주세요')
    });
  };
  
  
  render(){
    const { fetchDataSource,fetchSearchTerms,fetchTotalResult } = this.state;
    return(
      <Fragment>
        <AritstSearchComponent onCreate={this.fetchData}/>
        <SearchResultComponent dataSource={fetchDataSource} totalSearch={fetchTotalResult} searchName={fetchSearchTerms}/>
      </Fragment>
    )
  }
}

export default ArtistSearchPage
