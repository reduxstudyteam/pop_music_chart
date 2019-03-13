//--------------------
// import core
//--------------------
import React, { Fragment, PureComponent } from "react";
import { FormGroup, FormControl } from 'styled-form-component';
import { Button } from "styled-button-component";

const styleSheet = {
  form:{
    display: "flex",
    position: "relative",
    top: "-47.5px",
    left: "-10px",
    float: "right"
  },
  input:{
    width: "160px",
    marginRight: "10px"
  }
}
class AritstSearchComponent extends PureComponent{
  constructor(props){
    super(props);
    this.state={
      name: ""
    };
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
        <form onSubmit={this.handleSubmit}>
          <FormGroup style={styleSheet.form}>
            <FormControl style={styleSheet.input} value={this.state.name} onChange={this.handleChange} placeholder="artist search" />
            <Button primary outline type="submit"> search </Button>
          </FormGroup>
        </form>
      </Fragment>
    )
  }
}

export default AritstSearchComponent;