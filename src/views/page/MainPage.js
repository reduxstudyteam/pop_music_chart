//--------------------
// import core
//--------------------
import React, { Fragment, Component } from "react";

import '../../styles/mainpage.css'
//---------------------------
// another css in js (학습용)
//---------------------------
// const styleSheet = {
//   container: {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     width: "300px",
//     height: "300px",
//     margin: "-150px 0 0 -150px"
//   },
//   box: {
//     display: "table-cell",
//     width: "inherit",
//     height: "inherit",
//     textAlign: "center",
//     verticalAlign: "middle",
//     cursor: "pointer"
//   },
//   imageContainer: {
//     width: "300px"
//   }
// };

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props);
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
