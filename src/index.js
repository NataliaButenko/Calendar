import React from "react";
import ReactDOM from "react-dom";
import { App } from './App';
import { Provider } from 'react-redux';
import storeConfig from "./store/store";
//import persistor from './store/store';
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <Provider store={ storeConfig().store }>
    <PersistGate loading={ null } persistor={ storeConfig().persistor }>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
