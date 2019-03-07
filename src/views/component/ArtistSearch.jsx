//--------------------
// import core
//--------------------
import React, { Fragment, PureComponent } from "react";

const styleSheet = {
  form: {
    position: "relative",
    top: "-42px",
    float: "right"
  }
}
class AritstSearchComponent extends PureComponent{
  constructor(props){
    super(props);
    this.state={
      name: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      name: "",
    })
  }
  

  

  render(){
    return(
      <Fragment>
        <form onSubmit={this.handleSubmit}  style={styleSheet.form}>
            <input placeholder="artist search" value={this.state.name} onChange={this.handleChange}/>
              <button type="submit"> 검색 </button>
        </form>
      </Fragment>
    )
  }
}

export default AritstSearchComponent;