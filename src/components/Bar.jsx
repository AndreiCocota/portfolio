import React from 'react';
import '../styles/Skills.scss';


function Bar (props) {

    return (
        <div className="skill">
            <div className="skill-name">
                <span><p>{props.name}</p></span>
                <span>{props.level}%</span>
            </div>
            
            <div className="skill-fill" style={{height:"5px", background:"grey", borderRadius:"10px"}}>
                <div key={props.id} style={{width:props.level + "%", height:"5px", backgroundColor:"red", transitionDelay:"5s"}}></div>
            </div>
            
        </div>
    )

}

export default Bar;

// style={{width:props.level + "%", height:"5px", backgroundColor:"red", borderRadius:"10px"}}