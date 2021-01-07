import React, { useState, useEffect } from "react";
import logo from "../logo2.jpg";

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("/api/customers")
      .then(res => res.json())
      .then(customers => setCustomers(customers))
      .catch(error => console.log(error));
  }, []);

  console.log(customers);

  return (
    <div>
      <img
        src={logo}
        alt="logo"
        style={{ height: "200px", margin: "37.5px 0" }}
      />
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          width: "30%",
          margin: "auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly"
        }}
      >
        {customers.map(customer => (
          <li
            key={customer.id}
            style={{
              fontSize: "1.3rem",
              lineHeight: "2rem",
              margin: "0 30px"
            }}
          >
            {customer.firstName} {customer.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Customers;
