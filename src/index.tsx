import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { Provider } from "mobx-react";
import { RootStore } from "./features";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const rootStore = new RootStore();
root.render(
  <Provider rootStore={rootStore}>
    <App />
  </Provider>
);
