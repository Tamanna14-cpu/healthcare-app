import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Service = ({ service }) => {


    const { id, title, subtitle, image, date } = service;


    return (
        <>
            <Col>
                <Card className="card-height service-card" data-aos="fade-up">
                    <Card.Img variant="top" className="course-img" src={image} />
                    <Card.Body>
                        <Card.Text>
                            <div className="d-flex justify-content-between text-muted">
                                <div>{title}</div>
                                <div>{date}</div>
                            </div>
                        </Card.Text>
                        <Card.Title>
                            <div className="d-flex justify-content-between gap-5">
                                <div className="card-title">{subtitle}</div>
                                <div><i className="fas fa-share-alt mt-2 share-icon"></i></div>
                            </div>
                        </Card.Title>
                    </Card.Body>
                    <Link to={`/services/${id}`} className="see-btn">
                        <button type="button" className="btn btn-outline-secondary ">See More</button>
                    </Link>
                </Card>
            </Col>
        </>
    );
};

export default Service;