import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import "./index.css";

const el = document.getElementById("root");
const root = createRoot(el);

root.render(<App />);
