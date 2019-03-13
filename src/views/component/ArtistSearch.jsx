//--------------------
// import core
//--------------------
import React, { Fragment, PureComponent } from "react";
import { FormGroup, FormControl } from 'styled-form-component';
import { Button } from "styled-button-component";

//--------------------
// import reudx modules
//--------------------
import { connect } from 'react-redux';
import { getSearchArtistAPI } from '../../modules/redux';

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
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // 여기서는 setState 를 하는 것이 아니라
    // 특정 props 가 바뀔 때 설정하고 설정하고 싶은 state 값을 리턴하는 형태로
    // 사용됩니다.
    // console.log(nextProps.searchdata)
    if(nextProps.searchdata.hasOwnProperty('searchResult')){
      return {value: nextProps.searchdata}
    }
    return null; // null 을 리턴하면 따로 업데이트 할 것은 없다라는 의미
    
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  
  handleSubmit = async (e) => {
    e.preventDefault();
    this.props.getSearchArtistAPI(this.state);
    await this.tester();
  }

  tester = () => {
    if (this.props.searchdata.hasOwnProperty('searchResult')) {
      this.props.history.push({
        pathname: `/searchresult/${this.state.name}`,
        state: this.props.searchdata
      });
      this.setState({
        name: "",
      })
    }
  }

  render(){
    console.log(this.props.searchdata)
    // console.log(this.state)
    return(
      <Fragment>
        <form onSubmit={this.handleSubmit} >
          <FormGroup style={styleSheet.form}>
            <FormControl style={styleSheet.input} value={this.state.name} onChange={this.handleChange} placeholder="artist search" />
            <Button primary outline type="submit"> search </Button>
          </FormGroup>
        </form>
      </Fragment>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({ searchdata: state.searchdata });
const mapDispatchToProps = { getSearchArtistAPI };
export default connect(mapStateToProps, mapDispatchToProps)(AritstSearchComponent);
