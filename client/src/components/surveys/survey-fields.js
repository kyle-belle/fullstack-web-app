import React from 'react';

 export default ({input, label, meta :{error, touched, active, warning }}) => {
    const {name} = input;
    return ( 
        <div className="form-field">

            <label htmlFor={`${name}`} className="form-label">{label}</label>
            <input {...input} id={`${name}`}/>
            <p style={{color: "rgb(255,50,100)", fontWeight: "bolder", textAlign: "left"}}>{(active && name === "recipients") || (touched && (!active || (name === "recipients")))? error : ""}</p>

            <p style={{color: "rgb(255,200,80)", fontWeight: "bolder", textAlign: "left"}}>{(name === "sender" && touched)? warning: ""}</p>

        </div>
    );
}