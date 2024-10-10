import React from "react";
import ReactDOM from "react-dom/client";

var h1 = React.createElement("h1",{},"This is h1 tag");

var root = ReactDOM.createRoot(document.getElementById("root"));

root.render(h1);