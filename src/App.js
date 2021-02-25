import React,{useEffect,useState} from 'react'
import SearchBar from './components/SearchBar'
import "./App.css"
import InfoBox from './components/InfoBox'
import RenderMap from './components/RenderMap'

function App() {
  const [locationData, setLocationData] = useState(null) 
  const [ipAddress,setIpAddress] = useState(''); 
  //Set this state if ip address entered is invalid
  const [invalidIp,setInvalidIp] = useState(false); 

  const apiEndpoint = `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=${ipAddress}`;
  
  async function fetchData() {
    //Set to null so that to show loading screen 
    setLocationData(null);
    const res = await fetch(apiEndpoint);
    const data = await res.json();
    if(data.code === 422) {
      console.log(data.messages);
      //Set Ip address to null so that page redirects to clients location
      setIpAddress('');

      //Set invalidIp to true
      setInvalidIp(true);
      //After 3 seconds change invalidIp to false
      setTimeout(() => {setInvalidIp(false)},3000)
    } else {
      setLocationData(data);
    }
  }

  useEffect(() => { 
    fetchData();
  },[ipAddress])

  return (
    <div className="main">

      {invalidIp ? (<div className="error">Invalid IP !</div>) : (<div></div>)}

      <div className="top">
        <div className="header">
          IP Address Tracker
        </div>
        <SearchBar setIpAddress={setIpAddress}/>
        {!locationData && <div className="middle loading">Loading...</div>}
        {locationData && <InfoBox data={locationData}/>}
      </div>

      {!locationData && (<div className="bottom loading">Loading...</div>)}
      {locationData && <RenderMap lat={locationData.location.lat} lng={locationData.location.lng}/>} 
    </div>
  )
}

export default App
