import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from "./game";
import { Router } from "@reach/router";

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Game path={"/"} />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);