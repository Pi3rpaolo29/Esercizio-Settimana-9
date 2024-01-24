import React from 'react'
import {Col, Row, Container, Image, Button} from 'react-bootstrap'
import Shuffle from '../playerbuttons/Shuffle.png'
import Previous from '../playerbuttons/Previous.png'
import Play from '../playerbuttons/Play.png'
import Next from '../playerbuttons/Next.png'
import Repeat from '../playerbuttons/Repeat.png'

export default function NavbarBottom() {
  return (
    <>
        {/* NAVBAR FLEX-BOTTOM */}
        <Container fluid className="fixed-bottom bg-container pt-1">
        <Row className=''>
            <Col lg={10} className="offset-lg-2">
                <Row className=''>
                    <Col xs={6} md={4} lg={2} className="offset-3 offset-md-4 offset-lg-5 playerControls mt-1" id='playerControls'>
                        <Row>
                            <Col>
                                <a>
                                    <img src={Shuffle} alt="shuffle" />
                                </a>
                                <a>
                                    <img src={Previous} alt="shuffle" />
                                </a>
                                <a>
                                    <img src={Play} alt="shuffle" />
                                </a>
                                <a>
                                    <img src={Next} alt="shuffle" />
                                </a>
                                <a>
                                    <img src={Repeat} alt="shuffle" />
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="justify-content-center playBar py-3">
                    <Col xs={8} md={6}>
                        <div id="progress">
                            <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow="0"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            ></div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
        </Container> 
        {/* END NAVBAR BOTTOM */} 
    </>
  )
}
