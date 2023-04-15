import React from "react";
import './website.css';
import { Link } from "react-router-dom";

const Website = function (props) {
    return (
        <div className="webiste">
            {/* <div className="navbar">
                <div className="navbar-title"><p className="title">Running Avinash.js ...</p></div>
            </div> */}
            <div className="mainw">
                <div className="img-containerw">
                    <img alt="not available" class="imgw" src="https://media.licdn.com/dms/image/D5603AQGGCrLH47zMOQ/profile-displayphoto-shrink_800_800/0/1673633937396?e=1686787200&v=beta&t=zKonocYF_fIlq_fDiNGWuoXX6LWktf8cKmbJkc5i5Ew"></img>
                </div>
                <div className="button-containerw">
                    <button type="button" className="btnw"><Link className="link" to='/'>Terminal version</Link></button>
                    <button type="button" className="btnw"><Link className="link" to='/portfolio'>Portfolio</Link></button>
                    <button type="button" className="btnw"><Link className="link" to='/about'>About Me</Link></button>
                    <button type="button" className="btnw"><Link className="link" to='/contact'>Contact Me</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Website;