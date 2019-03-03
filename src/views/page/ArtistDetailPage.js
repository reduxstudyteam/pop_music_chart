//--------------------
// import core
//--------------------
import React, { Component } from "react";

//--------------------
// import third-party
//--------------------
import Axios from "axios";

//--------------------
// import util
//--------------------
import { REACT_APP_API_KEY, REACT_APP_API_BASE_URL } from "../../utils/secret";

//---------------------------
// another css in js (학습용)
//---------------------------
const styleSheet = {
  container: {
    height: "100vh",
    padding: "20px",
    backgroundColor: "salmon",
    display: "flex",
    justifyContent: "space-between"
  },
  leftElem: {
    width: "min-content",
    overflow: "scroll"
  },
  rightElem: {
    width: "min-content"
  },
  imgContainer: {
    width: "600px",
    height: "600px"
  },
  artistName: {
    marginBottom: "15px"
  },
  artistInfo: {
    width: "1100px",
    marginBottom: "15px"
  }
};

class ArtistDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artistName: ""
    };
  }
  componentDidMount() {
    const artistName = this.props.location.state.artistName;
    Axios.get(
      `${REACT_APP_API_BASE_URL}?method=artist.getInfo&artist=${artistName}&api_key=${REACT_APP_API_KEY}&format=json`
    ).then(res => {
      console.log(res.data.artist);
      const fetchedData = res.data.artist;
      this.setState(
        {
          artistName: fetchedData.name,
          artistImage: fetchedData.image[5]["#text"],
          artistInfo: fetchedData.bio.content,
          similarArtist: fetchedData.similar.artist
        },
        () => {
          console.log(this.state);
          document.querySelector(
            ".artistInfo"
          ).innerHTML = this.state.artistInfo;
        }
      );
    });
  }

  render() {
    return (
      <div style={styleSheet.container}>
        <div style={styleSheet.leftElem}>
          <img
            style={styleSheet.imgContainer}
            src={this.state.artistImage}
            alt={this.state.artistName}
          />
        </div>
        <div style={styleSheet.rightElem}>
          <div style={styleSheet.artistName}>{this.state.artistName}</div>
          <div style={styleSheet.artistInfo} className="artistInfo" />
          <div>
            {/* {this.state.similarArtist.map((item, index) => (
              <div key={index}>{item.name}</div>
            ))} */}
          </div>
          <div>picture</div>
          <div>picture</div>
          <div>picture</div>
        </div>
      </div>
    );
  }
}

export default ArtistDetailPage;
