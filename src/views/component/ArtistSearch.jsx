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

  //빈값일때 true를 반환해주는 함수
  isEmpty = (obj) => {
    for(var key in  obj){
      if(obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }


  // render() 를 호출하고난 다음에 발생하게 되며, 이전 props 및 state를 가져 올 수가 있음
  // 우리에겐 이전 props(prevProps)가 필요하다!
  componentDidUpdate(prevProps) {

    // 마지막으로 디스패치한 값이 빈 객체니까 빈 객체가 잘 들어왔을시 조건
    if(this.isEmpty(this.props.searchdata)){

      // 세번째로 받은 디스패치가 searchResult 이므로 이 해당 프로퍼티를 찾는 조건
      // object.assign으로 복제된 최종값을 알고 싶기 때문
      if(prevProps.searchdata.hasOwnProperty('searchResult')){
        
        // prevProps에 우리가 원하는 값이 있으니 이를 활용해 해당 구문 실행
        prevProps.history.push({
          pathname: `/searchresult/${prevProps.searchdata.searchName}`,
          state: prevProps.searchdata
        });

        // currentProps는 이미 빈 객체 이기때문에  다른 검색 요청을 하기전까지 아무변화는 일어나지않음.
      }
    }
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.getSearchArtistAPI(this.state);
    this.setState({
      name: ""
    })
  }

  render(){
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
