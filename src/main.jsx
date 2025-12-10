import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import Demo from './Demo.jsx'  <-- Comment this out or delete it
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />  {/* <-- Make sure this is active! */}
    {/* <Demo /> */}
  </React.StrictMode>,
)