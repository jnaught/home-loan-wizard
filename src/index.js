import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";

import store from "./store";
import { HashRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,

  document.getElementById("root")
);
registerServiceWorker();
// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import registerServiceWorker from "./registerServiceWorker";
// import "./index.css";

// import store from "./store";
// import { Provider } from "react-redux";
// import { HashRouter } from "react-router-dom";

// ReactDOM.render(
//   <HashRouter>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </HashRouter>,
//   document.getElementById("root")
// );
// registerServiceWorker();
