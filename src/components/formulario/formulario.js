import React from "react";
import './styles.css'

function Formulario({textoAss, body, tituloForm}){
    return(
        <form className="contato-form-container">
            <div className="alinhamento text">
                <h1 className="text alinhamento">{tituloForm}</h1>
            </div>
            <div className="input-texto">
                <labe for="nome" className="form-input2">Seu nome:</labe>
                <input id="nome" className="form-input" placeholder="Seu nome" type="text" tabindex="1" required autofocus></input>
                <labe for="email"className="form-input2">Seu e-mail:</labe>
                <input id="email" className="form-input" placeholder="Seu e-mail" type="email" tabindex="2" required></input>
                <labe for="assunto"className="form-input2">{textoAss}:</labe>
                <input id="assunto" className="form-input" placeholder={textoAss} type="text" tabindex="3" required></input>
                <labe for="mensagem" className="form-input2">{body}:</labe>
                <textarea id="mensagem" cols="35"rows="8" className="form-input"></textarea>
            </div>
            <div className="alinhamento text">
                <button className="btn text">Enviar</button>
            </div>
            
        </form>
    )
}

export default Formulario