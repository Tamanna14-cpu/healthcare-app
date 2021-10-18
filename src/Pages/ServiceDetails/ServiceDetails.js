import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Container, Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ServiceDetails = () => {

    const [myservices, setMyservices] = useState([]);

    useEffect(() => {
        async function serviceData() {
            try {
                const res = await fetch('./serviceData.json');
                const data = await res.json();
                setMyservices(data)
            }
            catch (error) {
                console.log(error)
            }
        };
        serviceData();
    }, [])

    const { id } = useParams();


    return (
        <div>
            <Container>
                <h2 style={{ color: 'orange' }} className="my-5">We Are Here To Listen You Dear!</h2>

                <Row xs={1} md={3} className="g-4">
                    {
                        myservices.map(service => <Col key={id}>
                            <Card className="card-height">
                                <Card.Img variant="top" className="course-img" src={service.image} />
                                <Card.Body>
                                    <Card.Title>{service.title}</Card.Title>
                                    <Card.Text>
                                        {service.subtitle}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default ServiceDetails;