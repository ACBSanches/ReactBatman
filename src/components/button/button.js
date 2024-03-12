import React from "react";
import './styles.css'

function Button({onClick,name,active}){
    return(
        <div className="containerButton">
            <button onClick={() => onClick(20)} className={active? "button":"disableButton"}>{name}</button>
            <span>Seus dados foram salvos</span>
        </div>
    )
}

export default Button