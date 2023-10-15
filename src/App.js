import React, { Component } from 'react';
import './App.css';
import { MapContainer, TileLayer, Popup, Marker} from 'react-leaflet'
import * as L from "leaflet";
import mapPin from './images/map-pin.png'
// import { createControlComponent } from "@react-leaflet/core";
// import "leaflet-routing-machine";

const markerIcon = L.icon({iconUrl: mapPin, iconSize: [30, 30]});
// const testInputs = [
//   {latitude: -122.3075, longitude: 47.6546},
//   {latitude: -122.3051, longitude: 47.6595},
// ]

export default class App extends Component {

  constructor(props) {
    super(props);
    // Initialize to UW's coordinates
    this.state = {
      lat1: -122.3075,
      lon1: 47.6546,
      lat2: -122.3075,
      lon2: 47.6546,
      searchInputs: []
    };
  }

  handleLonChange = (event, num) => {
    if (num === 1) {
      this.setState({lon1: event.target.value})
    } else if (num == 2) {
      this.setState({lon2: event.target.value})
    }
  }
  handleLatChange = (event, num) => {
    if (num === 1) {
      this.setState({lat1: event.target.value})
    } else if (num == 2) {
      this.setState({lat2: event.target.value})
    }
  }
  handleSubmit = () => {
    const inputs = [
      {latitude: this.state.lat1, longitude: this.state.lon1},
      {latitude: this.state.lat2, longitude: this.state.lon2},
    ]
    this.setState({searchInputs: inputs})
    console.log(inputs)
  }

  render() {
    return (
      <>
      <div>
        <input id='longitude' placeholder='Longitude' type='number' onChange={(e) => this.handleLonChange(e, 1)}/>
        <input id='longitude' placeholder='Latitude' type='number' onChange={(e) => this.handleLatChange(e, 1)}/>
      </div>
      <div>
        <input id='longitude' placeholder='Longitude' type='number' onChange={(e) => this.handleLonChange(e, 2)}/>
        <input id='longitude' placeholder='Latitude' type='number' onChange={(e) => this.handleLatChange(e, 2)}/>
      </div>
      <button onClick={this.handleSubmit}>Submit</button>
      
      <div>
          <MapContainer className='leaflet-container' center={[47.6546, -122.3075]} zoom={15} scrollWheelZoom={false}>
          <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {this.state.searchInputs.map((point, index) => (
            <Marker
                key={index}
                position={[point.longitude, point.latitude]}
                icon={markerIcon}
            >
            </Marker>
          ))}
          </MapContainer>
      </div>
      </>
    );
  }
}

// const createRoutineMachineLayer = () => {
//   const instance = L.Routing.control({
//     waypoints: [
//       L.latLng(-122.3075, 47.6546),
//       L.latLng(-122.3051, 47.6595)
//     ],
//     router: L.Routing.MapBox
//   });
//   return instance;
// };

// const RoutingMachine = createControlComponent(createRoutineMachineLayer);
