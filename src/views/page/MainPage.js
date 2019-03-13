//--------------------
// import core
//--------------------
import React, { Fragment, Component } from "react";

import '../../styles/mainpage.css'

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goToChart = () => {
    this.props.history.push({
      pathname: "/trackchart"
    });
  };

  render() {
    return (
      <Fragment>
        <div className="wrapper">
          <div className="main-container" onClick={this.goToChart}>
            <h1 aria-label="A fds-study by Mudux" data-label="A fds-study by">
              <span aria-label="Mudux"></span>
            </h1>
          </div>
        </div>
      </Fragment>
    );
  }
}
