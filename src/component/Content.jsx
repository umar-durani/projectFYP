import React from "react";
import "./Content.css";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import InstagramIcon from "@mui/icons-material/Instagram";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import AppleIcon from "@mui/icons-material/Apple";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";

const Content = () => {
  return (
    <>
      <section className="parent2">
        <Container>
          <Row>
            <Col>
              <div>
                <h2 className="job-head">Featured Job</h2>
              </div>
              <div className="flex-feature">
                <div className="featured-sect">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis, cum error. Molestiae nulla tempore,
                  </p>
                </div>
                <div>
                  <Button variant="info" className="primarybtn">
                    Primary
                  </Button>{" "}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        {/* Insert card */}
        <Container>
          <Row>
            <Col md={4}>
              <Card style={{ width: "19rem" }}>
                <Card.Body>
                  <div className="flex-card">
                    <div>
                      <InstagramIcon className="icon" />
                    </div>
                    <div>
                      <StarBorderIcon className="start-icon" />
                    </div>
                  </div>
                  {/* Insert stack */}
                  <div className="stack">
                    <h6>Microsoft</h6>
                    <div className="flex-flag">
                      <div>
                        <DashboardCustomizeIcon className="flag-icon" />
                      </div>
                      <div>
                        <span>Pakistan, Japan</span>
                      </div>
                    </div>
                  </div>
                  <Card.Title className="mt-3">Visual Designer</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Full-Time
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make.
                  </Card.Text>
                  <div className="flex-footer">
                    <div className="footer">
                      <h6>$2700/month</h6>
                    </div>
                    <div className="buton">
                      <Button variant="info" className="buton">
                        Primary
                      </Button>{" "}
                    </div>
                  </div>
                </Card.Body>
              </Card>
              {/* Insert second card */}
              <Card style={{ width: "19rem" }}>
                <Card.Body>
                  <div className="flex-card">
                    <div>
                      <InstagramIcon className="icon" />
                    </div>
                    <div>
                      <StarBorderIcon className="start-icon" />
                    </div>
                  </div>
                  {/* Insert stack */}
                  <div className="stack">
                    <h6>Apple</h6>
                    <div className="flex-flag">
                      <div>
                        <AppleIcon className="flag-icon" />
                      </div>
                      <div>
                        <span>Pakistan, Japan</span>
                      </div>
                    </div>
                  </div>
                  <Card.Title className="mt-3">Custome's Service's</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Full-Time
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make.
                  </Card.Text>
                  <div className="flex-footer">
                    <div className="footer">
                      <h6>$2300/month</h6>
                    </div>
                    <div className="buton">
                      <Button variant="info" className="buton">
                        Primary
                      </Button>{" "}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={{ width: "19rem" }}>
                <Card.Body>
                  <div className="flex-card">
                    <div>
                      <InstagramIcon className="icon" />
                    </div>
                    <div>
                      <StarBorderIcon className="start-icon" />
                    </div>
                  </div>
                  {/* Insert stack */}
                  <div className="stack">
                    <h6>Airbnb</h6>
                    <div className="flex-flag">
                      <div>
                        <SportsScoreIcon className="flag-icon" />
                      </div>
                      <div>
                        <span>Pakistan, Japan</span>
                      </div>
                    </div>
                  </div>
                  <Card.Title className="mt-3">
                    Senior Backened Developer
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Full-Time
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make.
                  </Card.Text>
                  <div className="flex-footer">
                    <div className="footer">
                      <h6>$2550/month</h6>
                    </div>
                    <div className="buton">
                      <Button variant="info" className="buton">
                        Primary
                      </Button>{" "}
                    </div>
                  </div>
                </Card.Body>
              </Card>
              {/* insert second card */}
              <Card style={{ width: "19rem" }}>
                <Card.Body>
                  <div className="flex-card">
                    <div>
                      <InstagramIcon className="icon" />
                    </div>
                    <div>
                      <StarBorderIcon className="start-icon" />
                    </div>
                  </div>
                  {/* Insert stack */}
                  <div className="stack">
                    <h6>Twitch</h6>
                    <div className="flex-flag">
                      <div>
                        <SportsScoreIcon className="flag-icon" />
                      </div>
                      <div>
                        <span>Pakistan, Japan</span>
                      </div>
                    </div>
                  </div>
                  <Card.Title className="mt-3">Streamer Game's</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Full-Time
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make.
                  </Card.Text>
                  <div className="flex-footer">
                    <div className="footer">
                      <h6>$2700/month</h6>
                    </div>
                    <div className="buton">
                      <Button variant="info" className="buton">
                        Primary
                      </Button>{" "}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={{ width: "19rem" }}>
                <Card.Body>
                  <div className="flex-card">
                    <div>
                      <InstagramIcon className="icon" />
                    </div>
                    <div>
                      <StarBorderIcon className="start-icon" />
                    </div>
                  </div>
                  {/* Insert stack */}
                  <div className="stack">
                    <h6>Meta</h6>
                    <div className="flex-flag">
                      <div>
                        <SportsScoreIcon className="flag-icon" />
                      </div>
                      <div>
                        <span>Pakistan, Japan</span>
                      </div>
                    </div>
                  </div>
                  <Card.Title className="mt-3">Database Engineer</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Full-Time
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make.
                  </Card.Text>
                  <div className="flex-footer">
                    <div className="footer">
                      <h6>$2700/month</h6>
                    </div>
                    <div className="buton">
                      <Button variant="info" className="buton">
                        Primary
                      </Button>{" "}
                    </div>
                  </div>
                </Card.Body>
              </Card>
              {/* Insert second card */}
              <Card style={{ width: "19rem" }}>
                <Card.Body>
                  <div className="flex-card">
                    <div>
                      <InstagramIcon className="icon" />
                    </div>
                    <div>
                      <StarBorderIcon className="start-icon" />
                    </div>
                  </div>
                  {/* Insert stack */}
                  <div className="stack">
                    <h6>Stack</h6>
                    <div className="flex-flag">
                      <div>
                        <SportsScoreIcon className="flag-icon" />
                      </div>
                      <div>
                        <span>Pakistan, Japan</span>
                      </div>
                    </div>
                  </div>
                  <Card.Title className="mt-3">
                    Senior Fronted Developer
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Full-Time
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make.
                  </Card.Text>
                  <div className="flex-footer">
                    <div className="footer">
                      <h6>$2700/month</h6>
                    </div>
                    <div className="buton">
                      <Button variant="info" className="buton">
                        Primary
                      </Button>{" "}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Content;
