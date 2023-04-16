import React from "react";
import './about.css';
import { Link } from "react-router-dom";

const About = function (props) {
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
                    <p  className="text-name">Avinash Reddy c</p>
                    <p className="text-head">Web Developer and AI enthusiast</p>
                    <p className="text">I am B.E student , currently studying in my 4th sem in computer science and bussiness systems
                    , in JSS Science and Technology University , Mysore . I started my web development in 2nd sem and learnt it all from
                    different courses . 
                    Today I know <b>HTML , CSS , JavaScript and basic React </b>and for the backend I use <b>Node and Express </b> . I also know <b>Mongo DB</b> and its cloud sevices to integrate a database in the websites . I have also worked on some basic projects (portfolio) .
                     I have always been intrested in research and will try to follow it my new found liking Ai and Ml .
                     Checkout my github and other accounts for more information in contact me page.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;