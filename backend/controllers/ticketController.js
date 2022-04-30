const express = require("express");
const fs = require("fs");
const router = express.Router();

//GET
//ENDPOINT: /api/ticket/all
//DESC: To get all the product added in the list
router.get("/all", (req, res) => {
  let ticketJson = JSON.parse(fs.readFileSync("./data/ticket.json"));
  let tempTotalPrice = null;
  ticketJson.forEach((data) => {
    console.log(`
        Product:        ${data.product}
        Type:           ${data.type}
        Quantity:       ${data.quantity}
        unitPrice       ${data.unitPrice}
    `);
    tempTotalPrice += data.quantity * data.unitPrice;
  });
  console.log(`
        Total Price:    ${tempTotalPrice}`);
  res.send(ticketJson);
});

//POST
//ENDPOINT: /api/ticket/add
//DESC: To add a new product to the list
router.post("/add", (req, res) => {
  const { product, type, quantity, unitPrice } = req.body;
  let ticketJson = JSON.parse(fs.readFileSync("./data/ticket.json"));
  ticketJson.push({
    id: ticketJson.length + 1,
    product,
    type,
    quantity,
    unitPrice,
  });
  fs.writeFileSync("./data/ticket.json", JSON.stringify(ticketJson));
  res.send(ticketJson);
});

//DELETE
//ENDPOINT: /api/ticket/:id
//DESC: To delete a product in the list.
router.delete("/delete/:id", (req, res) => {
  let ticketJson = JSON.parse(fs.readFileSync("./data/ticket.json"));
  ticketJson = ticketJson.filter((ticket) => ticket.id != req.params.id);
  fs.writeFileSync("./data/ticket.json", JSON.stringify(ticketJson));
  res.send(ticketJson);
});

module.exports = router;
