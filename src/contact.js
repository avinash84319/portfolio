import React from "react";
import './about.css';
import { Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons'

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
                {/* <p  className="text-name">Avinash Reddy c</p> */}
                    {/* <p className="text-head">Web Developer and AI enthusiast</p> */}
                    <div className="cont">
                    <SocialIcon className="icons" url="https://twitter.com/Avinash77936013" />
                    <SocialIcon className="icons" url="https://www.linkedin.com/in/avinash-reddy-c-857057235/" />
                    <SocialIcon className="icons" url="https://github.com/avinash84319" />
                    <SocialIcon className="icons" url="https://www.instagram.com/avirdy_23/" />
                    <SocialIcon className="icons" url="mailto:avihanvaisri@gmail.com" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;