import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Formulario from "../../components/formulario/formulario";

function Comentarios(){
    return(
        <div>
            <Header />
            <Formulario tituloForm="Comentário" textoAss="Título" body="Comentário"/>
            <Footer />
        </div>
    )
}

export default Comentarios;