import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const buttonStyle = {
  backgroundColor: "#dae8e5",
  color: "#4d695d",
  borderColor: "#4d695d",
};

const Search = ({ word, setWord, handleSubmit }) => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Form.Group as={Col} xs={9}>
                <Form.Control
                  type="text"
                  value={word}
                  onChange={(e) => setWord(e.target.value)}
                  placeholder="Search for new image..."
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Button style={buttonStyle} variant="primary" type="submit">
                  Search
                </Button>
              </Form.Group>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
