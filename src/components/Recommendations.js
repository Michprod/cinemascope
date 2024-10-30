import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const MovieRecommendations = () => {
  const recommendations = [
    // Top Picks
    {
      id: 1,
      title: "The Shawshank Redemption",
      poster: "https://image.tmdb.org/t/p/w342/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
      rating: 4.4,
      year: 1994,
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    },
    {
      id: 2,
      title: "The Godfather",
      poster: "https://image.tmdb.org/t/p/w342/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
      rating: 4.3,
      year: 1972,
      description:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    },
    {
      id: 3,
      title: "Parasite",
      poster: "https://image.tmdb.org/t/p/w342/nHlHRntqfDM0ORsfgPL28u4GiTT.jpg",
      rating: 4.3,
      year: 2019,
      description:
        "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    },
    {
      id: 4,
      title: "The Godfather Part II",
      poster: "https://image.tmdb.org/t/p/w342/zDu0TsCZHPzDO0d0iG9QynKGr4J.jpg",
      rating: 4.3,
      year: 1974,
      description:
        "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    },
    {
      id: 5,
      title: "The Usual Suspects",
      poster: "https://image.tmdb.org/t/p/w342/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
      rating: 4.3,
      year: 1995,
      description:
        "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat.",
    },
    {
      id: 6,
      title: "Fight Club",
      poster: "https://image.tmdb.org/t/p/w342/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
      rating: 4.2,
      year: 1999,
      description:
        "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    },
    {
      id: 7,
      title: "Schindler's List",
      poster: "https://image.tmdb.org/t/p/w342/8SPj3p008qQcSX9bw9TBYNBlFq5.jpg",
      rating: 4.2,
      year: 1993,
      description:
        "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    },
    {
      id: 8,
      title: "12 Angry Men",
      poster: "https://image.tmdb.org/t/p/w342/hkxxMIGaiCTmrEArK7J56JTKUlB.jpg",
      rating: 4.3,
      year: 1957,
      description:
        "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
    },
  ];

  const recommendationGroups = [
    {
      title: "Top Picks",
      items: recommendations.slice(0, 6),
    },
    {
      title: "Recent Releases",
      items: recommendations.slice(2, 8),
    },
    {
      title: "Critically Acclaimed",
      items: recommendations.slice(4),
    },
  ];

  return (
    <Container fluid className="py-4 p-xl-4">
      {recommendationGroups.map((group, index) => (
        <section key={index} className="mb-5 mt-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="h4 mb-0">{group.title}</h3>
            <Button variant="link">Voir plus</Button>
          </div>

          <Row className="flex-nowrap overflow-auto g-4">
            {group.items.map((movie) => (
              <Col key={movie.id} xs={12} sm={6} md={4} lg={3} xl={2}>
                <Card className="h-100 movie-card">
                  <div className="position-relative">
                    <Card.Img
                      variant="top"
                      src={movie.poster}
                      alt={movie.title}
                      style={{ height: "400px", objectFit: "cover" }}
                    />
                    <div className="card-img-overlay d-flex flex-column justify-content-end">
                      <div className="movie-info p-2">
                        <h5 className="card-title text-white mb-2">
                          {movie.title}
                        </h5>
                        <p className="text-white small mb-2">
                          {movie.description}
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <span className="badge bg-warning me-2">
                              ⭐ {movie.rating}
                            </span>
                            <small className="text-white">{movie.year}</small>
                          </div>
                        </div>
                        <div className="mt-2">
                          <Button
                            variant="primary"
                            size="sm"
                            className="me-md-0"
                          >
                            Plus d'infos
                          </Button>
                          <Button variant="outline-light" size="sm">
                            + Ma liste
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
      ))}

      <style jsx>{`
        .movie-card {
          transition: transform 0.2s;
          cursor: pointer;
          background: #1a1a1a;
          border: none;
          border-radius: 8px;
          overflow: hidden;
        }

        .movie-card:hover {
          transform: scale(1.05);
        }

        .movie-info {
          background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.95) 0%,
            rgba(0, 0, 0, 0.4) 100%
          );
          opacity: 0;
          transition: opacity 0.3s;
          border-radius: 8px;
        }

        .movie-card:hover .movie-info {
          opacity: 1;
        }

        .overflow-auto {
          -ms-overflow-style: none;
          scrollbar-width: none;
          padding-bottom: 1rem;
        }

        .overflow-auto::-webkit-scrollbar {
          display: none;
        }

        .badge {
          font-size: 0.2rem;
        }

        .card-title {
          font-size: 1.1rem;
          font-weight: 600;
        }
      `}</style>
    </Container>
  );
};

export default MovieRecommendations;
