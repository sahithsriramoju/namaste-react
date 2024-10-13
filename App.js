import React from "react";
import ReactDOM from "react-dom/client";

var h1 = React.createElement("h1",{},"This is h1 tag");
console.log(h1);

//JSX syntax - HTML/XML - like syntax
//Babel transpiles JSX code to React code. 
//The below code is transpiled to React.CreateElement("p", {class="para"},"This is paragraph")
const para = <p className="para">This is paragraph</p>

const Heading = () => (<h1 id="heading">
    This is h1 tag
    </h1>);


//React component - two types
//Class based - old
//Function based - new
const ContainerComponent = () => (
    <div className="container">
        {/* Insert component inside another component */}
        <Heading />
        <Heading></Heading>
        {/*Execute javascript in the jsx with curl braces */}
        {Heading()} 
        {/* Insert React element inside react component */}
        {para}
    </div>
)

var root = ReactDOM.createRoot(document.getElementById("root"));

//render component
root.render(<ContainerComponent/>);