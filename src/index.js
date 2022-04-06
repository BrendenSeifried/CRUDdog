import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LogProvider } from './context/LoginContext';
// import { DogProvider } from './context/Edit_NewContext';

ReactDOM.render(
  <React.StrictMode>
    {/* <DogProvider> */}
    <LogProvider>
      <App />
    </LogProvider>
    {/* </DogProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
