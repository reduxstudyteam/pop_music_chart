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
import ArtistSearchPage from "./views/page/ArtistSearchPage";
import SearchResultPage from "./views/page/SearchReultPage";

import AritstSearchComponent from "./views/component/ArtistSearch";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarComponent />
        <Route exact path="/" component={MainPage} />
        <Route path="/" component={AritstSearchComponent} />
        <Route path="/artistchart" component={ArtistChartPage} />
        <Route path="/trackchart" component={TrackChartPage} />
        <Route path="/detail/:id" component={ArtistDetailPage} />
        <Route path="/searchresult/:name" component={SearchResultPage}/>
      </div>
    );
  }
}

export default App;
