import React, { useState } from "react";
import axios from "axios";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalBox = ({ setItems, items }) => {
  const [product, setProduct] = useState(null);
  const [type, setType] = useState("");
  const [quantity, setQuantity] = useState(null);
  const [unitPrice, setUnitPrice] = useState(null);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    const newItem = {
      id: items.length + 1,
      product,
      type,
      quantity,
      unitPrice,
    };
    axios.post("/api/ticket/add", newItem).then(() => {
      setItems((prevState) => {
        return [...prevState, newItem];
      });
    });
    handleClose();
  };

  return (
    <>
      <Grid direction="column-reverse" alignItems="flex-end" container>
        <Grid item xs={2} sm={4} md={4}>
          <Button color="primary" variant="contained" onClick={handleOpen}>
            Add
          </Button>
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            variant="h5"
            align="center"
            sx={{ mb: 1 }}
            gutterBottom
            component="div"
          >
            Add New Product
          </Typography>
          <TextField
            id="outlined-basic"
            fullWidth
            label="Product"
            variant="outlined"
            onChange={(e) => setProduct(e.target.value)}
            sx={{ mb: 2 }}
          />
          <FormControl fullWidth sx={{ mb: 1 }}>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              label="Type"
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value={10}>food</MenuItem>
              <MenuItem value={20}>drinks</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Quantity"
            variant="outlined"
            sx={{ mb: 2 }}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Unit Price"
            variant="outlined"
            sx={{ mb: 2 }}
            onChange={(e) => setUnitPrice(e.target.value)}
          />
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="secondary"
            fullWidth
          >
            Save
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default ModalBox;
