import React from "react";
import Projects from "./projects";

const Terdisplay=(props)=>{
    const Prev=(props)=>{
        if(props.cmd.length){
            return(

                props.cmd.map((element)=>{
                
                return <div className="terminal-body">
                <p className="terminal-body-text">PS A:\Users\Friends -- {element}</p>
                </div>
                })
            )
        }
    }

    const Response = (props)=>{
        if(props.text[0]==="projects"){
            return <Projects />
        }
        if(props.text.length){
            return(
                props.text.map((element)=>{
                
                    return <p className="terdisplay-text">{element}</p>
                    })
            )
        }
    }

    return <div className="terdisplay" >
        <Prev cmd={props.cmd} />
        <Response text={props.text} />
    </div>
}

export default Terdisplay;