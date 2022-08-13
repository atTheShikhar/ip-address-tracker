import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import "./App.css";
import InfoBox from "./components/InfoBox";
import RenderMap from "./components/RenderMap";
import LoadingBox from "./components/LoadingBox";

function App() {
  const [locationData, setLocationData] = useState(null);
  const [ipAddress, setIpAddress] = useState("");
  //Set this state if ip address entered is invalid
  const [invalidIp, setInvalidIp] = useState(false);

  const apiEndpoint = `https://ipinfo.io/${ipAddress}?token=b4d0d97ba75d9b`;

  async function fetchData() {
    //Set to null so that to show loading screen
    setLocationData(null);
    const res = await fetch(apiEndpoint);
    const data = await res.json();
    if (data.hasOwnProperty("bogon") || data.hasOwnProperty("error")) {
      console.log(data);
      //Set Ip address to null so that page redirects to clients location
      setIpAddress("");

      //Set invalidIp to true
      setInvalidIp(true);
      //After 3 seconds change invalidIp to false
      setTimeout(() => {
        setInvalidIp(false);
      }, 3000);
    } else {
      setLocationData(data);
    }
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ipAddress]);

  return (
    <div className="main">
      {invalidIp ? <div className="error">Invalid IP !</div> : <div></div>}

      <div className="top">
        <div className="header">IP Address Tracker</div>
        <SearchBar setIpAddress={setIpAddress} />
        {!locationData && <LoadingBox />}
        {locationData && <InfoBox data={locationData} />}
      </div>

      {!locationData && <div className="bottom loading">Loading...</div>}
      {locationData && (
        <RenderMap
          lat={locationData.loc.split(",")[0]}
          lng={locationData.loc.split(",")[1]}
        />
      )}
    </div>
  );
}

export default App;
