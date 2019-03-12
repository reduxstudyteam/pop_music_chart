//--------------------
// import core
//--------------------
import React, { Component, Fragment } from "react";

//--------------------
// import presentation component
//--------------------
import TrackTableComponent from "../component/TrackTable";

//--------------------
// import reudx modules
//--------------------
import { connect } from 'react-redux';
import { getTrackChartAPI } from '../../modules/redux';

class TrackChartPage extends Component {
  componentDidMount() {
    this.props.getTrackChartAPI();
  }
 
  goToDetailPage = (artistName, uid) => {
    this.props.history.push({
      pathname: `/detail/${uid}`,
      state: { artistName }
    });
  };

  render() {
    const { apidata } = this.props;
    return (
      <Fragment>
        <TrackTableComponent dataSource={apidata} goToDetailPage={this.goToDetailPage} />
      </Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({ apidata: state.apidata });
const mapDispatchToProps = { getTrackChartAPI };
export default connect(mapStateToProps, mapDispatchToProps)(TrackChartPage);
