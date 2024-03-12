import React from "react";
import Header from "../../components/header/header";
import { useParams } from "react-router-dom";

function Detalhes(){
    const params = useParams()

    return(
        <div>
            <Header />
            Detalhes {params.id}
        </div>
    )
}

export default Detalhes;