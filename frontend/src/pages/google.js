import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  HeatmapLayer,
} from "@react-google-maps/api";


const containerStyle = {
  width: "800px",
  height: "500px",
};

const center = {
  lat: 44.25,
  lng: -76.55,
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.apikey,
    libraries: ["visualization"]
  });

  const [map, setMap] = React.useState(null);

  // const onLoad = React.useCallback(function callback(map) {
  //   // This is just an example of getting and using the map instance!!! don't just blindly copy!
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);

  //   setMap(map)
  // }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])


  // const gradient = React.useMemo(() => {
  //   if (window.google && window.google.maps.visualization)
  //     return new window.google.maps.visualization.HeatmapLayer([
  //       "rgba(0, 255, 255, 0)",
  //       "rgba(0, 255, 255, 1)",
  //       "rgba(0, 191, 255, 1)",
  //       "rgba(0, 127, 255, 1)",
  //       "rgba(0, 63, 255, 1)",
  //       "rgba(0, 0, 255, 1)",
  //       "rgba(0, 0, 223, 1)",
  //       "rgba(0, 0, 191, 1)",
  //       "rgba(0, 0, 159, 1)",
  //       "rgba(0, 0, 127, 1)",
  //       "rgba(63, 0, 91, 1)",
  //       "rgba(127, 0, 63, 1)",
  //       "rgba(191, 0, 31, 1)",
  //       "rgba(255, 0, 0, 1)",
  //     ]);
  // }, []);

  const heatmapData = React.useMemo(() => {
    if (window.google)
      return [
        new window.google.maps.LatLng(44.254541, -76.512936),
        new window.google.maps.LatLng(44.257061, -76.513215),
        new window.google.maps.LatLng(44.256823, -76.507507),
        new window.google.maps.LatLng(44.252735, -76.507657),
      ];
  }, [window.google]);

  
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
      // onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <HeatmapLayer data={heatmapData} />
      
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
