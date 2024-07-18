// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import i18n from "./i18n.js";
// import { I18nextProvider } from "react-i18next";
// import { Provider } from "react-redux";
// import store from "./redux/store/store.jsx";

// const rootElement = document.getElementById("root");

// const root = ReactDOM.createRoot(rootElement);
// root.render(
//   <Provider store={store}>
//     <I18nextProvider i18n={i18n}>
//       <App />
//     </I18nextProvider>
//   </Provider>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import i18n from "./i18n.js";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import store from "./redux/store/store.jsx";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);
root.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </Provider>
);
