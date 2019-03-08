//--------------------
// import core
//--------------------
import React, { Fragment, PureComponent } from "react";

import addComma from "../../utils/addComma.js";

const styleSheet = {
  searchCard: {
    width: "300px",
    height: "435px",
    margin: "10px",
    border: "solid 1px #41403E",
    float: "left",
  },
  notSearch:{
    position: "absolute",
    fontSize: "2rem",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  resultHeader: {
    display: "flex",
    justifyContent: "center",
    margin: "0px auto",
  },
  wrapper: {
    width: "100%",
  },
  contents:{
    textAlign: "center"
  }
};

class SearchResultComponent extends PureComponent{
  isEmpty = (obj) => {
    for(var key in  obj){
      if(obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }

  convertName = name => {
    return name.split(" ").join("+");
  };

  render(){
    const {dataSource, totalSearch, searchName, goToDetailPage } = this.props;
    console.log(dataSource)
    return(
      <Fragment>
        <div>
          <div>
            {this.isEmpty(dataSource) ? 
              <div style={styleSheet.notSearch}>please search artists</div>
            : 
              <div style={styleSheet.wrapper}>
                <div style={styleSheet.resultHeader}>아티스트 '{searchName}'을 검색하셨습니다.</div>
                <div style={styleSheet.resultHeader}>관련 아티스트 검색결과는 약 {addComma(totalSearch)}개 입니다.</div>
              {
                dataSource.map((item,index) => (
                  <div key={index} style={styleSheet.searchCard}>
                  {this.isEmpty(item.image[item.image.length - 1]["#text"]) ? 
                    <img
                    src="http://gospeldi.com/web/product/big/201510/84_shop1_221066.jpg"
                    alt={item.name}
                    onClick={() => goToDetailPage(item.name, item.mbid)}
                    /> 
                  :
                    <img
                    src={item.image[item.image.length - 1]["#text"]}
                    alt={item.name}
                    onClick={() => goToDetailPage(item.name, item.mbid)}
                    />
                  }
                    <div style={styleSheet.contents}>
                      <p>가수명 : {item.name}</p>
                      <p>청취자 : {addComma(item.listeners)}명</p>
                      <p>
                      <a
                      href={`https://www.youtube.com/results?search_query=${this.convertName(
                        item.name
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      >
                      관련 유튜브
                      </a>
                      </p>
                    </div>
                  </div>
                ))
              }
              </div>
            }
          </div>
          {console.log(dataSource)}
        </div>
      </Fragment>
    )
  }
}

export default SearchResultComponent;