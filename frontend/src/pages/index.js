import React, { useState, useEffect } from "react";

const IndexPage = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/customers")
      .then((res) => res.json())
      .then((data) => setCustomers(data));
  }, []);

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
