import { MapContainer, TileLayer, Popup, Marker} from 'react-leaflet'
import MarkerClusterGroup from "react-leaflet-cluster";
import {useState, useEffect} from 'react'
import * as L from "leaflet";
import mapPin from '../images/map-pin.png'


const Map = (props) => {
    const [points, setPoints] = useState(props.searchInputs);
    const markerIcon = L.icon({iconUrl:mapPin, iconSize: [30, 30]});

    useEffect(() => { 
        setPoints(props.searchInputs) 
        console.log(props.searchInputs)
    }, [props.searchInputs]);
    // props.searchInputs: {p1: [lat1, lon1], p2: [lat2, lon2]}
    return (
        <div>
            <MapContainer className='leaflet-container' center={[47.6546, -122.3075]} zoom={12} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerClusterGroup>
                {points.map((point, index) => (
                <Marker
                    key={index}
                    position={[point['latitude'], point['longitude']]}
                    icon={markerIcon}
                >
                </Marker>
                ))}
            </MarkerClusterGroup> 
            </MapContainer>
        </div>
    );
}

export default Map;
