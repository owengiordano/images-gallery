import React from "react";
import { Card, Button, Nav } from "react-bootstrap";

const buttonStyle = {
  backgroundColor: "#dae8e5",
  color: "#4d695d",
  borderColor: "#4d695d",
};

const ImageCard = ({ image, deleteImage, saveImage }) => {
  const authorPortfolioURL = image.user?.portfolio_url;
  const authorName = image.user?.name || "No Author Name";

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
        </Button>{" "}
        {!image.saved && (
          <Button
            style={{
              color: "#dae8e5",
              backgroundColor: "#4d695d",
              borderColor: "#4d695d",
            }}
            variant="secondary"
            onClick={() => saveImage(image.id)}
          >
            Save
          </Button>
        )}
      </Card.Body>
      <Card.Footer
        style={{ backgroundColor: "#dae8e5", color: "#4d695d" }}
        className="text-center"
      >
        {authorPortfolioURL && (
          <Nav.Link
            style={{ color: "teal" }}
            href={authorPortfolioURL}
            target="_blank"
          >
            {authorName}
          </Nav.Link>
        )}
        {!authorPortfolioURL && authorName}
      </Card.Footer>
    </Card>
  );
};

export default ImageCard;
