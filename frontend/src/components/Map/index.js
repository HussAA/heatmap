import React from 'react'
import {Map, HeatMap, GoogleApiWrapper} from 'google-maps-react'
class MapContainer extends React.Component {
    render() {
      const heatmapData = [
        { lat: 37.782, lng: -122.447 },
        { lat: 37.782, lng: -122.445 },
      ];
  
      const heatmapProps = {
        positions: heatmapData,
        options: {
          radius: 20,
        },
      };
  
      return (
        <Map google={this.props.google} zoom={14}>
          <HeatMap {...heatmapProps} />
        </Map>
      );
    }
  }
  
  export default GoogleApiWrapper(
    process.env.apiKey
  )(MapContainer);
