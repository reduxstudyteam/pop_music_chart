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
import ChartPage from "./views/page/ChartPage";
import ArtistDetailPage from "./views/page/ArtistDetailPage";
import NavbarComponent from "./views/component/navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarComponent />
        <Route exact path="/" component={ChartPage} />
        <Route exact path="/detail/:id" component={ArtistDetailPage} />
      </div>
    );
  }
}

export default App;
