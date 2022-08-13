import React from "react";

function InfoBox(props) {
  const { data } = props;

  return (
    <div className="middle">
      <div className="ip wrapper">
        <div className="name">IP ADDRESS</div>
        <div className="value">{data.query}</div>
      </div>

      <div className="location wrapper">
        <div className="name">LOCATION</div>
        <div className="value">
          {data.city + "," + data.region + " " + data.zip}
        </div>
      </div>

      <div className="timezone wrapper">
        <div className="name">TIMEZONE</div>
        <div className="value">{data.timezone}</div>
      </div>

      <div className="isp wrapper">
        <div className="name">ISP</div>
        <div className="value">{data.isp}</div>
      </div>
    </div>
  );
}

export default InfoBox;
