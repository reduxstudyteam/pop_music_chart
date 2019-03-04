//--------------------
// import core
//--------------------
import React, { Fragment, PureComponent } from "react";

//---------------------------
// another css in js (학습용)
//---------------------------
const styleSheet = {
  container: {
    position:"absolute",
    top:"50%",
    left:"50%",
    width:"300px",
    height:"300px",
    margin:"-150px 0 0 -150px",
    border: "solid 1px",
  },
  box:{
    display: "table-cell",
    width: "inherit",
    height: "inherit",
    textAlign: "center",
    verticalAlign: "middle"
  }
};

export default class Main extends PureComponent{
  render(){
    return(
      <Fragment>
        <div style={styleSheet.container}>
          <div style={styleSheet.box}>
            Music App
          </div>
        </div>
      </Fragment>
    )
  }
}