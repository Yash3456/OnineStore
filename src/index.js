import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { createTheme, ThemeProvider } from "@mui/material";
import store from "./store";
import App from "./App";
import {BrowserRouter as Router} from "react-router-dom"; 

const theme = createTheme();
const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
};

ReactDOM.render(
  <>
    {/* Wrap the entire application with BrowserRouter */}
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AlertProvider template={AlertTemplate} {...options}>
            <App />
          </AlertProvider>
        </ThemeProvider>
      </Provider>
    </Router>
    
  </>,
  document.getElementById("root"),
);

