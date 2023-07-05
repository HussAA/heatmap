import React, { useState, useEffect } from "react";

const IndexPage = () => {
  const [customers, setCustomers] = useState([]); // 1st value current state, 2nd is to update our state

  useEffect(() => {
    fetch("http://localhost:3000/customers") // fetch data from the URL
      .then((res) => res.json()) // takes res from server converts to json
      .then((data) => setCustomers(data)); // takes the converted data and update our state
  }, []); // empty array to run this once

  return (
    <div>
      <h1>Customer List </h1>
      <br />
      <ul>
        {customers.map((item) => ( 
          <li key={item.postal_code}>{item.postal_code}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Heat Map</title>;
