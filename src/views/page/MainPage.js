//--------------------
// import core
//--------------------
import React, { Fragment, Component } from "react";

//---------------------------
// another css in js (학습용)
//---------------------------
const styleSheet = {
  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "300px",
    height: "300px",
    margin: "-150px 0 0 -150px"
  },
  box: {
    display: "table-cell",
    width: "inherit",
    height: "inherit",
    textAlign: "center",
    verticalAlign: "middle",
    cursor: "pointer"
  },
  imageContainer: {
    width: "300px"
  }
};

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
        <div style={styleSheet.container}>
          <div style={styleSheet.box} onClick={this.goToChart}>
            <img
              style={styleSheet.imageContainer}
              src="http://2.bp.blogspot.com/-rgEa3Zs29fA/VohnKflyTYI/AAAAAAAAnrk/9GUYonNKJQo/s1600/Apple%2BMusic.png"
              alt="Music Icon"
            />
          </div>
        </div>
      </Fragment>
    );
  }
}
