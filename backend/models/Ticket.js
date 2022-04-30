//NOTE from Pramod Jacob Sam
//MONGODB is not connected because of the security issue as the same connection string
//has to be shared in order to access the database. Using the file based storing as of now.

const mongoose = require("mongoose");

const ticketScheme = new mongoose.Schema(
  {
    product: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    unitPrice: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.model("Ticket", ticketScheme);

module.exports = Ticket;
