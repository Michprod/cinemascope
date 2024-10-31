// VideoCategory.js
import React, { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

const VideoCategory = ({ category, videos, onSelect, selectedVideos }) => {
  return (
    <div className="mb-5">
      <h3 className="mb-4">{category}</h3>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {videos.map((video) => (
          <Col key={video.id}>
            <Card
              className={`h-100 shadow-sm ${selectedVideos.includes(video) ? "selected" : ""}`}
            >
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
                  variant={
                    selectedVideos.includes(video)
                      ? "primary"
                      : "outline-primary"
                  }
                  className="mt-auto"
                  onClick={() => onSelect(video)}
                >
                  {selectedVideos.includes(video) ? "Déjà choisi" : "Choisir"}
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
