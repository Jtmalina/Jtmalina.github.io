import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer(){
    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    {/* md = medium 3 rows sm = small 12 rows  */}
                    <Col className="p-0" md={3} sm={12}> 
                        Julian Malina
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer; 