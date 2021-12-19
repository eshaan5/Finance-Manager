import React from 'react';
import ReactDOM from "react-dom";

import { Provider } from './context/context';
import App from "./App"; //import App.js
import './index.css'; // Importing CSS file

ReactDOM.render(
<Provider>
    <App />
    </Provider>, document.getElementById("root"));