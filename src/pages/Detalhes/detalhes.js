import React from "react";
import Header from "../../components/header/header";

import Footer from "../../components/footer/footer";
import { useParams } from "react-router-dom";

function Detalhes(){
    const params = useParams()

    return(
        <div>
            <Header />
            
            <Footer />
        </div>
    )
}

export default Detalhes;