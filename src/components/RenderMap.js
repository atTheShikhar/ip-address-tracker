import React from 'react'
import {MapContainer,TileLayer,Marker,Popup} from 'react-leaflet';

function RenderMap(props) {
    const {lat,lng} = props;
    return (
        <div className="bottom">
            <MapContainer center={[lat,lng]} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[lat,lng]}>
                    <Popup>
                        Lattitude: {lat} <br />Longitude: {lng}
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default RenderMap
