//--------------------
// import core
//--------------------
import React, { Component, Fragment } from "react";

//--------------------
// import presentation component
//--------------------
import ArtistTableComponent from "../component/ArtistTable";

//--------------------
// import reudx modules
//--------------------
import { connect } from 'react-redux';
import { getArtistChartAPI } from '../../modules/redux';

class ArtistChartPage extends Component {
  componentDidMount() {
    this.props.getArtistChartAPI();
  }

  goToDetailPage = (artistName, uid) => {
    this.props.history.push({
      pathname: `/detail/${
        uid ? uid : "Id-" + (Math.random() * 1000).toFixed(0).toString()
      }`,
      state: { artistName }
    });
  };

  render() {
    const { apidata } = this.props;
    return (
      <Fragment>
        <ArtistTableComponent dataSource={apidata} goToDetailPage={this.goToDetailPage}/>
      </Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({ apidata: state.apidata });
const mapDispatchToProps = { getArtistChartAPI };
export default connect(mapStateToProps, mapDispatchToProps)(ArtistChartPage);

