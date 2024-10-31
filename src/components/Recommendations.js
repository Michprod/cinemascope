import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaStar, FaRegStar, FaStarHalfAlt, FaPlus } from "react-icons/fa";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  background-color: #f8f9fa;
  padding: 2rem 1rem;
  max-width: 1300px;
  margin: 0 auto;
  margin-top: 5rem;
`;

const MovieCard = styled(Card)`
  transition: transform 0.2s;
  background: white;
  border: none !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 250px;
  margin: 0 auto;

  &:hover {
    transform: translateY(-5px);
  }
`;

const MovieTitle = styled(Card.Title)`
  font-size: 0.9rem;
  font-weight: 600;
  height: 2.4rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const ScrollRow = styled(Row)`
  flex-wrap: nowrap;
  overflow-x: auto;
  padding: 0.5rem 0;
  margin: 0 -0.5rem;
  justify-content: center;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const MovieCol = styled(Col)`
  padding: 0 0.5rem;
  display: flex;
  justify-content: center;
`;

const SectionHeader = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;
`;

const MovieImage = styled(Card.Img)`
  height: 250px;
  object-fit: cover;
  border-radius: 4px 4px 0 0;
`;

const CardBody = styled(Card.Body)`
  padding: 0.75rem;
`;

const MovieRecommendations = () => {
  const recommendations = [
    {
      id: 1,
      title: "Dune: Part Two",
      rating: 4.4,
      year: 2024,
      poster: "https://image.tmdb.org/t/p/w185/g03pwohXHOI75InM3zraiaEGguO.jpg",
    },
    {
      id: 2,
      title: "I, Robot",
      rating: 4.2,
      year: 2004,
      poster: "https://image.tmdb.org/t/p/w185/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    },
    {
      id: 3,
      title: "How to Steal 2 Million",
      rating: 3.8,
      year: 2011,
      poster: "https://image.tmdb.org/t/p/w185/mVqE5pCoofJ2QKu2LjXNcxVRR8V.jpg",
    },
    {
      id: 4,
      title: "Godzilla Minus One",
      rating: 4.5,
      year: 2023,
      poster: "https://image.tmdb.org/t/p/w185/eTM3qtGhDU8cvjpoa6KEt5E2auU.jpg",
    },
    {
      id: 5,
      title: "Your Monster",
      rating: 3.9,
      year: 2024,
      poster: "https://image.tmdb.org/t/p/w185/5uD4dxNX8JKFjWKYMHyOsqhi5pN.jpg",
    },
  ];

  const recommendationGroups = [
    {
      title: "Films Populaires",
      items: recommendations.slice(0, 4),
    },
    {
      title: "Nouveautés",
      items: recommendations.slice(1, 5),
    },
    {
      title: "Recommandés pour vous",
      items: recommendations.slice(2),
    },
  ];

  const renderStarRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-warning" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-warning" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-warning" />);
      }
    }
    return stars;
  };

  return (
    <StyledContainer fluid>
      {recommendationGroups.map((group, index) => (
        <section key={index} className="mb-4">
          <SectionHeader className="d-flex justify-content-between align-items-center mb-3">
            <h3 className="h5 fw-bold m-0">{group.title}</h3>
            <Button variant="link" className="text-decoration-none p-0">
              Voir plus →
            </Button>
          </SectionHeader>

          <ScrollRow>
            {group.items.map((movie) => (
              <MovieCol key={movie.id} xs={12} sm={6} md={4} lg={3}>
                <MovieCard>
                  <MovieImage
                    variant="top"
                    src={movie.poster}
                    alt={movie.title}
                  />
                  <CardBody>
                    <MovieTitle>{movie.title}</MovieTitle>
                    <div className="mb-1">
                      <small className="text-muted">{movie.year}</small>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      {renderStarRating(movie.rating)}
                      <small className="ms-2 text-muted">
                        {movie.rating.toFixed(1)}
                      </small>
                    </div>
                    <div className="d-grid">
                      <Button
                        variant="outline-primary"
                        size="sm"
                        className="d-flex align-items-center justify-content-center gap-2"
                      >
                        <FaPlus size={10} />
                        <span style={{ fontSize: "0.8rem" }}>
                          Ajouter à ma liste
                        </span>
                      </Button>
                    </div>
                  </CardBody>
                </MovieCard>
              </MovieCol>
            ))}
          </ScrollRow>
        </section>
      ))}
    </StyledContainer>
  );
};

export default MovieRecommendations;
