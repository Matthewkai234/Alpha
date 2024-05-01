import React from "react";
import ReactDOMClient from "react-dom/client";
import { Checkout } from "./screens/Checkout";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Checkout />);
