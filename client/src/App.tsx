import raspberrypiLogo from './assets/raspberrypi.svg';
import './App.css'
import axios from 'axios';
import { useState } from 'react';
import './assets/css/styles.css'

function App() {
    const [data, setData] = useState<any>();
  
    const handleBackendAPICall = async() => {
    const response = await axios.get('http://localhost:3001/api/')
    setData(response?.data);
  }

  return (
    <>
      <div>
        <a href="https://www.raspberrypi.com/" target="_blank">
          <img src={raspberrypiLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Raspberry Web Server</h1>
      <div className="card">
        <button onClick={handleBackendAPICall}>
          Call API
        </button>
        {data && data.message !== "" ? <><p className="api-message">API called</p> <p><code>Response - {data.message}</code></p></> : <p>Hit Call API Button to fetch Data</p> }
      </div>
    </>
  )
}

export default App
