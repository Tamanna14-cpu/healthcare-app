import React, { useEffect, useState } from 'react';
import './Freebies.css';
import storyImg from '../../images/write-a-story.jpg';
import { Card, Col, Container, Dropdown, Row } from 'react-bootstrap';

const Freebies = () => {


    const [freebies, setFreebies] = useState([]);

    useEffect(() => {
        async function freebiesData() {
            try {
                const res = await fetch('/freebiesdata.json');
                const data = await res.json();
                setFreebies(data);
            }
            catch (error) {
                console.log(error)
            }
        };
        freebiesData();
    }, [])



    return (
        <div>
            <img className="img-fluid story-img" src={storyImg} alt="" />
            <h1 className="story-txt">FREEBIES</h1>

            <Container>
                <Dropdown className="my-5 d-flex justify-content-end">
                    <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                        All kinda freebies
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Desktop Wallpaper</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Mobile Wallpaper</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Poster</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>


                <Row>
                    {
                        freebies.map(freebook => <Col xs={6} md={3} key={freebook.id}>
                            <Card className="card-height">
                                <div className="freebies-container">
                                    <Card.Img variant="top" className="freebies-img" src={freebook.image} />
                                    <div class="overlay">
                                        <div class="text">Do you feel like something is missing in your life? Do you want to make a bigger difference, but you are not sure how? The day you find out the purpose of your life is the day you achieve some of it. ...</div>
                                    </div>
                                </div>
                            </Card>
                            <h4 className="mb-5 mt-2">{freebook.title}</h4>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Freebies;