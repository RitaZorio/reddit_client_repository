import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './Styles/index.css';
import store from './Store.js';


import App from './App';

const container = document.getElementById('root');
const root =  ReactDOM.createRoot(container)

root.render(
//   <React.StrictMode>
    <Provider store={store}>
     <App/>
     </Provider>
    //  {/* </React.StrictMode> */}
);


