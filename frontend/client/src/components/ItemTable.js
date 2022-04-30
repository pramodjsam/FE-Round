import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import axios from "axios";

const ItemTable = ({ items, setItems }) => {
  const handleDelete = (id) => {
    axios.delete(`/api/ticket/delete/${id}`).then(() => {
      setItems((prevState) => {
        return prevState.filter((item) => item.id !== id);
      });
    });
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Unit Price</TableCell>
            <TableCell align="right">Sub Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items && items.length > 0
            ? items.map((item) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.product}
                  </TableCell>
                  <TableCell align="right">{item.type}</TableCell>
                  <TableCell align="right">{item.quantity}</TableCell>
                  <TableCell align="right">{item.unitPrice}</TableCell>
                  <TableCell align="right">
                    {item.quantity * item.unitPrice}
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      onClick={() => handleDelete(item.id)}
                      variant="outlined"
                      color="error"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            : null}
          <TableRow>
            <TableCell style={{ fontWeight: "bold" }} colSpan={5}>
              Total
            </TableCell>
            <TableCell align="right" style={{ fontWeight: "bold" }}>
              {items &&
                items.reduce(
                  (acc, item) => acc + item.unitPrice * item.quantity,
                  0
                )}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ItemTable;
