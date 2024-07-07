//to create a component is a 5 step process
// 1.import react and react dom libraries
// 2.get reference to div with id root
// 3.tell react to take control of that Element
// 4.create a Component
// 5.show component on screen

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import searchImages from "./api";

searchImages();
const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(<App />);
