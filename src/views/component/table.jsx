//--------------------
// import core
//--------------------
import React, { Fragment } from "react";

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
`;

//---------------------------
// another css in js (학습용)
//---------------------------
const styleSheet = {
  table: {
    width: "100px"
  }
};

function goToListen(artistName) {
  artistName = artistName.split(" ").join("+");
  console.log(`https://www.youtube.com/results?search_query=${artistName}`);
}

const TableComponent = dataSource => {
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
          </tr>
        </thead>
        <tbody>
          {dataSource.dataSource.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <TD>
                <img
                  style={styleSheet.table}
                  src={item.image[item.image.length - 1]["#text"]}
                  alt={item.name}
                />
              </TD>
              <TD>{item.name}</TD>
              <TD>{addComma(item.playcount)} 번</TD>
              <TD>{addComma(item.listeners)} 번</TD>
            </tr>
          ))}
        </tbody>
      </Table>
    </Fragment>
  );
};

export default TableComponent;
