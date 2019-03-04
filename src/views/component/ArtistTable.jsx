//--------------------
// import core
//--------------------
import React, { Fragment, PureComponent } from "react";

//--------------------
// import third-party
//--------------------

import { Table } from "styled-table-component";
import styled from "styled-components";

//--------------------
// import utils
//--------------------
import addComma from "../../utils/addComma.js";

//--------------------
// styled-component
//--------------------
export const TD = styled.td`
  text-align: center;
  vertical-align: middle !important;
`;

//---------------------------
// another css in js (학습용)
//---------------------------
const styleSheet = {
  table: {
    width: "100px",
    cursor: "pointer"
  },
  pointer: {
    cursor: "pointer"
  }
};

class ArtistTableComponent extends PureComponent {
  convertName = name => {
    return name.split(" ").join("+");
  };

  render() {
    const { dataSource, goToDetailPage, goToYoutube } = this.props;
    return (
      <Fragment>
        <Table striped>
          <thead>
            <tr>
              <th scope="col">순위</th>
              <th scope="col">가수 사진</th>
              <th scope="col">가수명</th>
              <th scope="col">재생 횟수</th>
              <th scope="col">청취 횟수</th>
              <th scope="col">유튜브 가기</th>
            </tr>
          </thead>
          <tbody>
            {dataSource.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <TD>
                  <img
                    style={styleSheet.table}
                    src={item.image[item.image.length - 1]["#text"]}
                    alt={item.name}
                    onClick={() => goToDetailPage(item.name, item.mbid)}
                  />
                </TD>
                <TD
                  style={styleSheet.pointer}
                  onClick={() => goToDetailPage(item.name, item.mbid)}
                >
                  {item.name}
                </TD>
                <TD>{addComma(item.playcount)} 번</TD>
                <TD>{addComma(item.listeners)} 번</TD>
                <TD>
                  <a
                    href={`https://www.youtube.com/results?search_query=${this.convertName(
                      item.name
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    유튜브 보기
                  </a>
                </TD>
              </tr>
            ))}
          </tbody>
        </Table>
      </Fragment>
    );
  }
}

export default ArtistTableComponent;
