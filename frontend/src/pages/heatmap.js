// import invariant from 'invariant';
// import React, { useEffect, useState, memo } from 'react';

// import {
//   applyUpdatersToPropsAndRegisterEvents,
//   unregisterEvents,
// } from '../helper';

// const eventMap = {};

// const updaterMap = {
//   data(instance, data) {
//     instance.setData(data);
//   },
//   map(instance, map) {
//     instance.setMap(map);
//   },
//   options(instance, options) {
//     instance.setOptions(options);
//   },
// };

// function HeatmapLayerFunctional(props) {
//   const [instance, setInstance] = useState(null);

//   useEffect(() => {
//     invariant(
//       !!window.google.maps.visualization,
//       'Did you include prop libraries={["visualization"]} in useJsApiScript? %s',
//       window.google.maps.visualization
//     );

//     invariant(!!props.data, 'data property is required in HeatmapLayer %s', props.data);

//     const heatmapLayer = new window.google.maps.visualization.HeatmapLayer({
//       ...(props.options || {}),
//       data: props.data,
//       map: props.map, // Use the map from props
//     });

//     setInstance(heatmapLayer);

//     if (props.onLoad) {
//       props.onLoad(heatmapLayer);
//     }

//     const unregisterEvents = applyUpdatersToPropsAndRegisterEvents({
//       updaterMap,
//       eventMap,
//       prevProps: {},
//       nextProps: props,
//       instance: heatmapLayer,
//     });

//     return () => {
//       if (instance !== null) {
//         if (props.onUnmount) {
//           props.onUnmount(instance);
//         }
//         unregisterEvents();
//         instance.setMap(null);
//       }
//     };
//   }, [props.data, props.options, props.onLoad, props.onUnmount, props.map]); // Add props.map to the dependency array

//   useEffect(() => {
//     if (instance !== null) {
//       const unregisterEvents = applyUpdatersToPropsAndRegisterEvents({
//         updaterMap,
//         eventMap,
//         prevProps: props,
//         nextProps: props,
//         instance,
//       });

//       return () => {
//         unregisterEvents();
//       };
//     }
//   }, [props]);

//   return null;
// }

// const HeatmapLayerF = memo(HeatmapLayerFunctional);

// function HeatmapLayer(props) {
//   const [heatmapLayer, setHeatmapLayer] = useState(null);

//   useEffect(() => {
//     invariant(
//       !!window.google.maps.visualization,
//       'Did you include prop libraries={["visualization"]} to <LoadScript />? %s',
//       window.google.maps.visualization
//     );

//     invariant(!!props.data, 'data property is required in HeatmapLayer %s', props.data);

//     const heatmapLayer = new window.google.maps.visualization.HeatmapLayer({
//       ...(props.options || {}),
//       data: props.data,
//       map: props.map, // Use the map from props
//     });

//     const registeredEvents = applyUpdatersToPropsAndRegisterEvents({
//       updaterMap,
//       eventMap,
//       prevProps: {},
//       nextProps: props,
//       instance: heatmapLayer,
//     });

//     setHeatmapLayer(heatmapLayer);

//     return () => {
//       if (heatmapLayer !== null) {
//         if (props.onUnmount) {
//           props.onUnmount(heatmapLayer);
//         }
//         unregisterEvents(registeredEvents);
//         heatmapLayer.setMap(null);
//       }
//     };
//   }, [props.data, props.options, props.onUnmount, props.map]); // Add props.map to the dependency array

//   useEffect(() => {
//     if (heatmapLayer !== null && props.onLoad) {
//       props.onLoad(heatmapLayer);
//     }
//   }, [heatmapLayer, props.onLoad]);

//   return null;
// }

// export default HeatmapLayer;
