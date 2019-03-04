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
import {
  REACT_APP_API_KEY,
  REACT_APP_API_BASE_URL,
  REACT_APP_API_GET_INFO_ARTIST_METHOD
} from "../../utils/secret";

//---------------------------
// another css in js (학습용)
//---------------------------
const styleSheet = {
  container: {
    height: "100vh",
    padding: "20px",
    display: "flex",
    justifyContent: "space-between"
  },
  leftElem: {
    width: "min-content",
    // overflow: "scroll"
    marginRight: "10px"
  },
  rightElem: {
    // width: "min-content",
    marginLeft: "10px"
  },
  imgContainer: {
    width: "600px",
    height: "600px"
  },
  artistName: {
    marginBottom: "20px"
  },
  artistInfo: {
    marginBottom: "20px"
  },
  similarArtistContainer: {
    width: "100%"
  },
  similarArtistItem: {
    display: "flex",
    alignItems: "center",
    margin: "10px 0"
  },
  similarArtistImage: {
    width: "50px",
    marginRight: "10px"
  },
  similarArtistName: {
    widht: " 70%"
  },
  addInfoContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
    marginBottom: "10px"
  },
  addInfo: {
    display: "flex"
  },
  subText: {
    marginRight: "10px"
  },
  relatedKeyword: {
    marginBottom: "10px"
  },
  relatedKeywordContainer: {
    display: "flex",
    justifyContent: "space-between"
  },
  tagStyle: {
    backgroundColor: "salmon",
    padding: "5px",
    borderRadius: "10px"
  }
};

class ArtistDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artistName: "",
      artistImage: [],
      artistInfo: "",
      similarArtist: [],
      listener: "",
      playCounter: "",
      onTour: "",
      tag: [],
      queryString: "",
      videoId: ""
    };
  }
  componentDidMount() {
    const artistName = this.props.location.state.artistName;
    Axios.get(
      `${REACT_APP_API_BASE_URL}?method=${REACT_APP_API_GET_INFO_ARTIST_METHOD}&artist=${artistName}&api_key=${REACT_APP_API_KEY}&format=json`
    ).then(res => {
      const fetchedData = res.data.artist;
      this.setState(
        {
          artistName: fetchedData.name,
          queryString: fetchedData.name,
          artistImage: fetchedData.image[5]["#text"],
          artistInfo: fetchedData.bio.content,
          similarArtist: fetchedData.similar.artist,
          listener: fetchedData.stats.listeners,
          playCounter: fetchedData.stats.playcount,
          onTour: fetchedData.ontour,
          tag: fetchedData.tags.tag
        },
        () => {
          document.querySelector(
            ".artistInfo"
          ).innerHTML = this.state.artistInfo;

          //--------------------
          // fetching Youtube api
          //--------------------

          let optionParams = {
            q: this.state.queryString,
            part: "snippet",
            key: "AIzaSyBOAiyakGP6djO2Rc0nwnz3WmQn-Ll_jfo",
            type: "video",
            maxResults: 10,
            regionCode: "KR",
            videoDuration: "short"
          };

          optionParams.q = encodeURI(optionParams.q);

          let url = "https://www.googleapis.com/youtube/v3/search?";
          for (let option in optionParams) {
            url += option + "=" + optionParams[option] + "&";
          }

          url = url.substr(0, url.length - 1);

          Axios.get(url)
            .then(res =>
              this.setState({ videoId: res.data.items[0].id.videoId })
            )
            .catch(e => console.error(e));
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
          <div style={styleSheet.addInfoContainer}>
            <div style={styleSheet.addInfo}>
              <div style={styleSheet.subText}>청취자 수</div>
              <div>{this.state.listener}</div>
            </div>
            <div style={styleSheet.addInfo}>
              <div style={styleSheet.subText}>재생 횟수</div>
              <div>{this.state.playCounter}</div>
            </div>
            <div style={styleSheet.addInfo}>
              <div style={styleSheet.subText}>투어 횟수</div>
              <div>{this.state.onTour}</div>
            </div>
          </div>
          <div>
            <div style={styleSheet.relatedKeyword}>연관 검색어</div>
            <div style={styleSheet.relatedKeywordContainer}>
              {this.state.tag
                ? this.state.tag.map((item, index) => (
                    <a href={item.url} style={styleSheet.tagStyle} key={index}>
                      <div>{item.name}</div>
                    </a>
                  ))
                : null}
            </div>
          </div>
          <div style={styleSheet.similarArtistContainer}>
            {this.state.similarArtist
              ? this.state.similarArtist.map((item, index) => (
                  <a href={item.url} key={index}>
                    <div style={styleSheet.similarArtistItem}>
                      <img
                        style={styleSheet.similarArtistImage}
                        src={item.image[1]["#text"]}
                        alt={item.name}
                      />
                      <div style={styleSheet.similarArtistName}>
                        {item.name}
                      </div>
                    </div>
                  </a>
                ))
              : null}
          </div>
        </div>
        <div style={styleSheet.rightElem}>
          <div style={styleSheet.artistName}>{this.state.artistName}</div>
          <div style={styleSheet.artistInfo} className="artistInfo" />
          <div>
            <iframe
              width="500"
              height="300"
              src={`https://www.youtube.com/embed/${this.state.videoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={this.state.queryString + "player"}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ArtistDetailPage;
