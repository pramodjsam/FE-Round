import React, { useEffect, useState } from "react";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import ItemTable from "./components/ItemTable";
import ModalBox from "./components/ModalBox";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      light: "#EBAFE",
      main: "#5E7BFD",
      dark: "#3A53A2",
    },
    secondary: {
      light: "#EBD4F7",
      main: "#FFC5F6",
      dark: "#FF9FB1",
    },
  },
});

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getAllTicket = async () => {
      const res = await axios.get("/api/ticket/all");
      setItems(res.data);
    };

    getAllTicket();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ mt: 2 }}>
        <ModalBox setItems={setItems} items={items} />
        <ItemTable items={items} setItems={setItems} />
        {/* First Component */}
        <FirstComponent />
        {/* Second Component */}
        <SecondComponent />
      </Container>
    </ThemeProvider>
  );
}

export default App;
