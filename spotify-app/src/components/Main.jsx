import React from 'react'
import {Col, Row} from 'react-bootstrap'

export default function Navbar() {
  return (
    <>
    {/* MAIN */}
      <Col className="col-12 col-md-9 offset-md-3 mainPage">
        <Row className="row mb-3">
          <Col className="col-9 col-lg-11 d-none d-md-flex" id='mainLinks'>
            <a href="#">TRENDING</a>
            <a href="#">PODCAST</a>
            <a href="#">MOODS AND GENRES</a>
            <a href="#">NEW RELEASES</a>
            <a href="#">DISCOVER</a>
          </Col>
        </Row>
        <Row className="row">
          <Col className="col-md-3 pt-5 text-center" id="img-container"></Col>
          <Col className="col-md-8 p-5">
            <Row className="row">
              <div className="col-md-10 mb-5" id="trackList"></div>
            </Row>
          </Col>
        </Row>
      </Col>
    {/* END MAIN */}
    
    </>
  )
}
