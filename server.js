const express = require("express"),
  app = express(),
  helmet = require("helmet"),
  port = process.env.PORT || 5000;

app.use(helmet());

app.get("/api/customers", (req, res, next) => {
  const customers = [
    { id: 1, firstName: "Maynard", lastName: "Keenan" },
    { id: 2, firstName: "Adam", lastName: "Jones" },
    { id: 3, firstName: "Justin", lastName: "Chancellor" },
    { id: 4, firstName: "Danny", lastName: "Carey" },
    { id: 5, firstName: "Paul", lastName: "D'Amour" }
  ];

  res.json(customers);
});

app.listen(port, () => console.log(`server's listening on port ${port}`));
