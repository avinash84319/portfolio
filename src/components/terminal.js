import React from "react";
// import ReactDOM from "react-dom";
import {useState } from "react";
import Terdisplay from "./terdisplay";

const Terminal=(props)=>{

    const helparr=['website :- displays porfolio in website form','about :- displays information about me' ,'projects :- displays some all of my projects',
                    "skills :- displays all of my skills" , "clear :- clears all of terminal"]
    const aboutarr=["name :- Avinash Reddy c","college:- JSS Science and Technology University","I am very much passionate about web development, I am learning React to become a Full-Stack developer",
                     "I am also very much intrested in AI/Ml stuff and soon gone try learn and explore that" , "github :- https://github.com/avinash84319",
                    "linkdin :- https://www.linkedin.com/in/avinash-reddy-c-857057235/" , "email me at :- avihanvaisri@gmail.com"]
    const skillsarr=["HTML,CSS,Javascrit","Node.js,Mongo DB","Basic React","Basic python","Graphic Designing"]
    const[cmd,setCmd]=useState([])
    const [text,setText]=useState([])


    const handlechange=(e)=>{
        if (e.key === 'Enter'){
            setCmd([...cmd,e.target.value]);
            console.log(e.target.value)
            if(e.target.value==="help"){
                console.log("entered");
                setText(helparr)
            }
            else if(e.target.value==="about"){
                setText(aboutarr)
            }
            else if(e.target.value==="projects"){
                setText(["projects"])
            }
            else if(e.target.value==="skills"){
                setText(skillsarr)
            }
            else if(e.target.value==="clear"){
                setText([]);
                setCmd([]);
            }
            else if(e.target.value==="website"){
                window.location.href ="website"
                return null;
            }
            else{
                setText(["command not found please use help"])
            }
        }
    }

    return <div className="terminal">
    <p className="terminal-heading">Use help to see the commands avaiable !</p>
    <Terdisplay text={text} cmd={cmd} />
        <div className="terminal-body">
        <p className="terminal-body-text">PS A:\Users\Friends --</p>
        <input type="text" className="input-text" onKeyDown={handlechange}  spellCheck="false" />
        </div>
    </div>
}

export default Terminal;