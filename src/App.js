//--------------------
// import core
//--------------------
import React, { Component } from "react";

//--------------------
// import third-party
//--------------------
import { Route } from "react-router-dom";

//--------------------
// import presentation component
//--------------------
import MainPage from "./views/page/MainPage";
import ArtistChartPage from "./views/page/ArtistChartPage";
import TrackChartPage from "./views/page/TrackChartPage";
import ArtistDetailPage from "./views/page/ArtistDetailPage";
import NavbarComponent from "./views/component/navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarComponent />
        <Route exact path="/" component={MainPage} />
        <Route exact path="/artistchart" component={ArtistChartPage} />
        <Route exact path="/trackchart" component={TrackChartPage} />
        <Route exact path="/detail/:id" component={ArtistDetailPage} />
      </div>
    );
  }
}

export default App;
