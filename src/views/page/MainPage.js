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
import TableComponent from "../component/table";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 1,
      fetchDataItemLength: 50,
      fetchDataSource: []
    };
    this.fetchData.bind(this);
  }

  // 데이터를 fetch할 때

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const { pageNumber, fetchDataItemLength } = this.state;
    const url = `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&page=${pageNumber}&limit=${fetchDataItemLength}&api_key=0def6e95e8d18f5e614ceca88cfb5e62&format=json`;
    Axios.get(url).then(response => {
      this.setState(
        {
          fetchDataSource: response.data.artists.artist
        },
        () => console.log(this.state.fetchDataSource)
      );
    });
  };

  render() {
    const { fetchDataSource } = this.state;
    return (
      <Fragment>
        <div>Music Chart</div>
        <TableComponent dataSource={fetchDataSource} />
      </Fragment>
    );
  }
}

export default MainPage;
