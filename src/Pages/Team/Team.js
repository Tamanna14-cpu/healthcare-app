import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Team.css';

const Team = () => {

    const [teams, setTeams] = useState([]);
    const [members, setMembers] = useState([]);

    useEffect(() => {
        async function teamData() {
            try {
                const res = await fetch('/teamData.json');
                const data = await res.json();
                setTeams(data.slice(0, 6));
            }
            catch (error) {
                console.log(error)
            }
        };
        teamData();
    }, [])



    useEffect(() => {
        async function memberData() {
            try {
                const res = await fetch('/teamData.json');
                const data = await res.json();
                setMembers(data.slice(6, 12));
            }
            catch (error) {
                console.log(error)
            }
        };
        memberData();
    }, [])


    return (
        <Container>
            <div className="my-5 pt-5">
                <h2 >WE ARE HERE FOR YOU!</h2>
                <h5 className="text-muted my-3">A self-improvement project with a focus on Personal Productivity, Motivation & Self Education. The goal is to create an <br /> environment of mutual support, where people can meet from all across the globe to solve problems related to anxiety, <br /> depression, negative thinking, stress, moodiness & other mental illness.</h5>
            </div>


            <Row className="gap-5">
                <Col xs={12} md={4}>
                    <Row className="gy-4 problem-part shadow-lg p-5 my-5">
                        <h4>What Kind Of problem You have? <br /> Just let us <span className="team-text">Know...</span></h4>
                        {
                            teams.map(team => <Col xs={12} md={6} key={team.id}>
                                <Card className="card-height">
                                    <Card.Img variant="top" src={team.image} />
                                    <Card.Body>
                                        <Card.Title>
                                            {team.title}
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>)
                        }
                    </Row>
                </Col>


                <Col xs={12} md={7}>
                    <Row className="gy-4 problem-part shadow p-5 my-5 ms-5">
                        <h4>Our team of board-certified physicians and other mental health professionals ensures our content is accurate, up-to-date, and inclusive.</h4>

                        <button className="btn btn-outline-secondary">Meet The Team <i class="fas fa-angle-double-right"></i></button>
                        {
                            members.map(member => <Col xs={12} md={4} key={member.id}>
                                <Card className="card-height">
                                    <Card.Img variant="top" src={member.image} />
                                    <Card.Body>
                                        <Card.Title>
                                            {member.name}
                                        </Card.Title>
                                        <Card.Text>
                                            {member.title}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>)
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Team;