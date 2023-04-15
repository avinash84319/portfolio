import React from "react";
import './about.css';
import { Link } from "react-router-dom";

const Contact = function (props) {
    return (
        <div className="website">
            <div className="main">
                <div className="img-container">
                    <img alt="not available" class="imga" src="https://media.licdn.com/dms/image/D5603AQGGCrLH47zMOQ/profile-displayphoto-shrink_800_800/0/1673633937396?e=1686787200&v=beta&t=zKonocYF_fIlq_fDiNGWuoXX6LWktf8cKmbJkc5i5Ew"></img>
                </div>
                <div className="button-containera">
                    <button type="button" className="btn"><Link className="link" to='/'>Terminal version</Link></button>
                    <button type="button" className="btn"><Link className="link" to='/portfolio'>Portfolio</Link></button>
                    <button type="button" className="btn"><Link className="link" to='/about'>About Me</Link></button>
                    <button type="button" className="btn"><Link className="link" to='/contact'>Contact Me</Link></button>
                </div>
                <div className="text-container">
                </div>
            </div>
        </div>
    )
}

export default Contact;