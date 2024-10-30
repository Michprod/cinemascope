// VideoCategory.js
import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

const VideoCategory = ({ category, videos, onSelect }) => {
  return (
    <div className="mb-5">
      <h3 className="mb-4">{category}</h3>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {videos.map((video) => (
          <Col key={video.id}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={video.poster}
                alt={video.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="h6">{video.title}</Card.Title>
                <div className="mt-2 d-flex justify-content-between align-items-center">
                  {video.year && (
                    <small className="text-muted">{video.year}</small>
                  )}
                  {video.rating && (
                    <small className="text-warning">
                      <i className="bi bi-star-fill me-1"></i>
                      {video.rating}
                    </small>
                  )}
                </div>
                <Button
                  variant="outline-primary"
                  className="mt-auto"
                  onClick={() => onSelect(video)}
                >
                  Choisir
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default VideoCategory;
