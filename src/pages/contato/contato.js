import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Formulario from "../../components/formulario/formulario";

function Contato(){
    return(
        <div>
            <Header />
            <Formulario tituloForm="Contato" textoAss="Assunto" body="Mensagem"/>
            <Footer />
        </div>
    )
}

export default Contato;