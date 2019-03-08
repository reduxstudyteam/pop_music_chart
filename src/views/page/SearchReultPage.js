import React, { Component } from 'react'

//--------------------
// import presentation component
//--------------------
import SearchResultComponent from "../component/SearchResult";

export default class SearchResultPage extends Component{
  goToDetailPage = (artistName, uid) => {
    this.props.history.push({
      pathname: `/detail/${uid}`,
      state: { artistName }
    });
  };
  render(){
    const { fetchDataSource,fetchSearchTerms,fetchTotalResult } = this.props.location.state;
    return( 
      <div>
       <SearchResultComponent goToDetailPage={this.goToDetailPage} dataSource={fetchDataSource} totalSearch={fetchTotalResult} searchName={fetchSearchTerms} />
      </div>
    )
  }
}