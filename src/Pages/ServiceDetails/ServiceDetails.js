import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Container, Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ServiceDetails = () => {

    // <PrivateRoute path="/services/:serviceId">


    const { serviceId } = useParams();
    console.log(serviceId)

    const [serviceDetails, setServiceDetails] = useState([]);

    useEffect(() => {

        try {
            async function singleService() {
                let res = await fetch('./serviceData.json');
                res = await res.json();
                res = await res.find(serviceDetails => serviceDetails.id === serviceId);
                setServiceDetails(res)
                console.log('serviceDetails', serviceDetails);
            }
            singleService();
        }

        catch (error) {
            console.log(error)
        }


    }, [])

    const title = serviceDetails.hasOwnProperty('title') ? serviceDetails.title : null;
    const image = serviceDetails.hasOwnProperty('image') ? serviceDetails.image : null;
    const subtitle = serviceDetails.hasOwnProperty('subtitle') ? serviceDetails.subtitle : null;


    return (
        <div>
            <Container>
                <h2 style={{ color: 'orange' }} className="my-5">We Are Here To Listen You Dear!</h2>

                <Row xs={1} md={3} className="g-4">
                    <Col >
                        <Card className="card-height">
                            <Card.Img variant="top" className="course-img" src={image} />
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>
                                    {subtitle}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ServiceDetails;