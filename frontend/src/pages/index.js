import React from "react";
import IndexPostalCode from "../components/Data/PostalCodes";
import {MapContainer} from '../components/Map'
const IndexPage = () => {

  return (
    <div>
     {/* <IndexPostalCode/> */}
     <MapContainer/>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
