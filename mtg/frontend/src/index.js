import App from "./pages/App/App"
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById("app")
  );
