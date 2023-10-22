import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, 
  //a feature of strict mode is, it makes two reuqests in developmetn mode to any api resources for verification purposes
);
