import React from "react";
const Projects = ()=>{

    
var projectsarray=[{
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
    },
    {
        title:"Food Delivery Services (contributions:-Ashmith ,Subrato ,Dixith)",
        image:"food.png",
        git:"https://github.com/SAS3442/foodcompare",
        link:"https://foodcompare-production.up.railway.app/"
    }]


    return(
        projectsarray.map((element)=>{
            return <div className="projects">
                <p className="project-title" >{element.title}</p>
                <img className="project-image" alt="didn't get the image" src={element.image}></img>
                <p className="project-git">Git hub :- {element.git}</p>
                <p className="project-link">Try out :- {element.link}</p>
            </div>
        })
    )
}

export default Projects;