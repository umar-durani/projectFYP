import React from "react";
import "./Landingpage.css";
import { Container, Row, Col } from "react-bootstrap";
import happyimg from "../assets/img/happy.png";
import microsoft from "../assets/img/microsoft.png";
import inimage from "../assets/img/inimg.png";
import opera from "../assets/img/opera.jpg";
import google from "../assets/img/twiter.png";
import isntagram from "../assets/img/insta.jpg";
import wordpress from "../assets/img/wordpress.png";

const Landingpage = () => {
  return (
    <>
      <section className="parent1">
        <Container>
          <Row>
            <Col md={6}>
              <div className="heading">
                <h1> Find your </h1>
                <h2>
                  <span className="dream-job">dream job</span> here
                </h2>
                <h2>easily and quikly</h2>
                {/* Insert para */}
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Porro iste repellat pariatur ipsum excepturi modi!
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div>
                <img className="img" src={happyimg} alt="" srcset="" />
              </div>
            </Col>
          </Row>
        </Container>
        {/* Insert  second container */}
        <Container className="icon-parent">
          <Row>
            <Col md={1}>
              <div>
                <img
                  className="microsoft-icon"
                  src={microsoft}
                  alt=""
                  srcset=""
                />
              </div>
            </Col>
            <Col md={1}>
              <div>
                <img className="inimg" src={inimage} alt="" srcset="" />
              </div>
            </Col>
            <Col md={1}>
              <div>
                <img className=" opera-icon" src={opera} alt="" srcset="" />
              </div>
            </Col>
            <Col md={1}>
              <div>
                <img className="gooel-icon" src={google} alt="" srcset="" />
              </div>
            </Col>
            <Col md={1}>
              <div>
                <img className="insta-icon" src={isntagram} alt="" srcset="" />
              </div>
            </Col>
            <Col md={1}>
              <img
                className="wordpress-icon"
                src={wordpress}
                alt=""
                srcset=""
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Landingpage;
