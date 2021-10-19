import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Container, Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ServiceDetails.css';

const ServiceDetails = () => {

    // <PrivateRoute path="/services/:serviceId">


    const { serviceId } = useParams();
    console.log(serviceId)

    const [serviceDetails, setServiceDetails] = useState([]);

    useEffect(() => {

        async function callApi() {
            let res = await fetch('../serviceData.json');
            res = await res.json();
            res = await res.find(serviceDetails => serviceDetails.id === serviceId);
            setServiceDetails(res)
            console.log('serviceDetails', serviceDetails);
        }
        callApi();



    }, [])

    const title = serviceDetails.hasOwnProperty('title') ? serviceDetails.title : null;
    const image = serviceDetails.hasOwnProperty('image') ? serviceDetails.image : null;
    const subtitle = serviceDetails.hasOwnProperty('subtitle') ? serviceDetails.subtitle : null;
    const description = serviceDetails.hasOwnProperty('description') ? serviceDetails.description : null;


    return (
        <div>
            <Container>
                <h2 style={{ color: 'orange' }} className="my-5">We Are Here To Listen You Dear!</h2>

                <Row className="g-4 mt-4">
                    <Col xs={12} md={5}>
                        <Card className="card-height">
                            <Card.Img variant="top" className="course-img" src={image} />
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>
                                    <h5>{subtitle}</h5>
                                    <div>{description}</div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} md={4}>
                        <h4>Don't feel alone ever <br /> Enjoy Life & Keep <span className="red-text">Loving</span> youself...</h4>
                        <div id="likes" className="like"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ServiceDetails;