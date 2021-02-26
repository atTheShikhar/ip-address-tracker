import React from 'react'

function InfoBox(props) {
    const {data} = props;

    return (
        <div className="middle">
            <div className="ip wrapper">
                <div className="name">IP ADDRESS</div>
                <div className="value">{data.ip}</div>
            </div>

            <div className="location wrapper">
                <div className="name">LOCATION</div>
                <div className="value">{data.location.city+','+data.location.region+" "+data.location.postalCode}</div>
            </div>

            <div className="timezone wrapper">
                <div className="name">TIMEZONE</div>
                <div className="value">UTC {data.location.timezone}</div>
            </div>

            <div className="isp wrapper">
                <div className="name">ISP</div>
                <div className="value">{data.isp}</div>
            </div>
        </div>        
    )
}

export default InfoBox 