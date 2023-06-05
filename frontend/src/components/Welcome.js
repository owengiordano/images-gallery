import React from "react";
import { Button } from "react-bootstrap";

const buttonStyle = {
  backgroundColor: "#dae8e5",
  color: "#4d695d",
  borderColor: "#4d695d",
};

const divStyle = {
  color: "#4d695d",
  backgroundColor: "#dae8e5",
};

const Welcome = () => {
  return (
    <div style={divStyle} className="p-5 text-center">
      <h1>Images Gallery</h1>
      <p>
        This is a simple application that retrieves photos using Unsplash API.
        In order to start enter any search term in the input field.
      </p>
      <p>
        <Button
          style={buttonStyle}
          variant="primary"
          href="https://unsplash.com/"
          target="_blank"
        >
          Learn more
        </Button>
      </p>
    </div>
  );
};

export default Welcome;
