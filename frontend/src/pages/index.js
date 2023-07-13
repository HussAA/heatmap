import React from "react";
import IndexPostalCode from "../components/Data/PostalCodes";

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
