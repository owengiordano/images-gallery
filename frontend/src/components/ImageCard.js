import React from "react";
import { Card, Button } from "react-bootstrap";

const buttonStyle = {
  backgroundColor: "#dae8e5",
  color: "#4d695d",
  borderColor: "#4d695d",
};

const ImageCard = ({ image, deleteImage }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image.urls.small} />
      <Card.Body style={{ color: "#4d695d" }}>
        <Card.Title>{image.title?.toUpperCase()}</Card.Title>
        <Card.Text>{image.description || image.alt_description}</Card.Text>
        <Button
          style={buttonStyle}
          variant="primary"
          onClick={() => deleteImage(image.id)}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ImageCard;
