import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import { Provider } from 'react-redux';
import { store } from './modules/redux';

const Router = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

export default Router;
