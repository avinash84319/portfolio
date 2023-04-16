import React from "react";
import './about.css';
import { Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons'

const Portfolio = function (props) {

    var projectsarray=[
        {
            title:"Food Delivery Services",
            image:"food.png",
            git:"https://github.com/SAS3442/foodcompare",
            link:"https://foodcompare-production.up.railway.app/"
        },
    {
        title:"Customer management system",
        image:"cust.png",
        git:"https://github.com/avinash84319/botic-version1",
        link:"https://customermanagment.up.railway.app/"
    },
    {
        title:"Tic-Tac-Toe Engine",
        image:"tic.png",
        git:"https://github.com/avinash84319/tictactoe",
        link:"https://tic-tac-toe-engine.up.railway.app/"
    },
    {
        title:"Image Viewer",
        image:"imgv.png",
        git:"https://github.com/avinash84319/image-viewer",
        link:"https://avinash84319.github.io/image-viewer/"
    }
    ]

    const Proj=()=>{
        return(
            projectsarray.map((projectsarray)=>{
                return <div className="projectsp">
                    <img className="project-imagep" alt="dad" src={projectsarray.image}></img>
                    <SocialIcon className="iconsp" url={projectsarray.git} />
                    <SocialIcon className="iconsp" network="linktree" url={projectsarray.link} />
                    <p className="project-titlep">{projectsarray.title}</p>
                </div>
            })
        )
    }
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
                <div className="text-containerp">
                    <Proj />
                </div>
            </div>
        </div>
    )
}

export default Portfolio;