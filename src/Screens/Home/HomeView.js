import React from 'react';
import './Home.css';

function HomeView({count, status, iniciar, pausar, parar}) {

    let buttons = null;
    if(status === "Rodando"){
        buttons = (
            <>
                <button onClick={pausar}>Pausar</button>
                <button onClick={parar}>Parar</button>
            </>            
        )
    } else if(status === "Pausado"){
        buttons = (
            <>
                <button onClick={iniciar}>Reiniciar</button>
                <button onClick={parar}>Parar</button>
            </>            
        )        
    } else { //status === "Parado"
        buttons = (
            <>
                <button onClick={iniciar}>Iniciar</button>
            </>            
        )
    }
    return (
        <div className="divInfo">
            <div className="App">Contador - {count}  </div>
            {buttons}
        </div>
        

    );
}
export default HomeView;