import React from 'react'
import {Map, HeatMap, GoogleApiWrapper} from 'google-maps-react'
export class MapContainer extends React.Component { // React component as a class
    render() { // renders jsx
      const heatmapData = [ // constant variable assigns it an array of objects
        { lat: 37.782, lng: -122.447 }, // geographical coordiante with latitude and longitude
        { lat: 37.782, lng: -122.445 }, // geographical coordiante with latitude and longitude
      ];
  
      const heatmapProps = {  // const var assigns it as a nested object
        positions: heatmapData,
        options: {
          radius: 20,
        },
      };
  
      return (
        <Map google={this.props.google} zoom={14}> 
          <HeatMap {...heatmapProps} /> 
          {/* renders component, uses spread syntax and passes object to the component */}
        </Map>
      );
    }
  }
  
  export default GoogleApiWrapper({  
  apiKey:"AIzaSyChV9kGe6L-3HCNNyvxJ5ZTL3GjbkreS9g"  
  })(MapContainer);         {/* exports component as the default export, 
                                wraps with GoogleApiWrapper, provides the API funcitionality, 
                                passes api key as a prop*/}
