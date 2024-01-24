import React from 'react'
import { Button, Col, Container, Nav, Navbar, InputGroup } from 'react-bootstrap'
import logo from '../logo/Spotify_Logo.png'

export default function Sidebar() {
  return (
    <>
        {/* SIDEBAR VERTICAL */}
        <Col xs={2} className="col-2">
          <Navbar
            className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between "
            id="sidebar"
          >
            <Container>
                <Navbar.Brand href="index.html">
                    <img
                    src={logo}
                    alt="Spotify_Logo"
                    width="131"
                    height="40"
                    />
                </Navbar.Brand>
                <Button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={''}
                >
                    <span className="navbar-toggler-icon"></span>
                </Button>
                <Navbar.Collapse /* className="collapse navbar-collapse" */ id="navbarNavAltMarkup">
                    <Nav /* className="navbar-nav" */>
                    <ul>
                        <li>
                        <a className="nav-item nav-link" href="index.html">
                        <i className="bi bi-house-door-fill"></i>&nbsp; Home
                        </a>
                        </li>
                        <li>
                        <a className="nav-item nav-link" href="#">
                        <i class="bi bi-book-fill"></i>
                            &nbsp; Your Library
                            </a>
                        </li>
                        <li>
                            <InputGroup className=" mt-3">
                                <input
                                type="text"
                                className="form-control mb-2"
                                id="searchField"
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="basic-addon2"
                                />
                                <div
                                className="input-group-append"
                                style={{marginBottom: '4%'}}
                                >
                                <button
                                    className="btn btn-outline-secondary btn-sm"
                                    type="button"
                                    id="button-addon1"
                                    onClick="search()"
                                >
                                    GO
                                </button>
                                </div>
                            </InputGroup>
                        </li>
                    </ul>
                    </Nav>
                </Navbar.Collapse>
            </Container>

            <div className="nav-btn">
                <button className="signup-btn" type="button">Sign Up</button>
                <button className="login-btn" type="button">Login</button>
                <div>
                    <a className="text-decoration-none" href="#">Cookie Policy</a> |
                    <a className="text-decoration-none" href="#"> Privacy</a>
                </div>
            </div>
          </Navbar>
        </Col>
        {/* END SIDEBAR VERTICAL */}
    </>
  )
}