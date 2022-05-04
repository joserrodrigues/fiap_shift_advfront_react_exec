import React, {useState, useEffect, useRef} from 'react';
import HomeView from './HomeView'

const  HomeController = () => {

    const [count, setCount] = useState(0)
    const [status, setStatus] = useState("Parado")
    const manageInterval = useRef(null);


    useEffect(() => {
        
        manageInterval.current = setInterval(() => {
            if(status === "Rodando"){
                setCount(count => count + 1)
            }            
        }, 1000);

        return () => {
            clearInterval(manageInterval.current);
        }
    })

    const iniciar = () => {
        setStatus("Rodando")
        
    }

    const pausar = () => {
        setStatus("Pausado")
    }

    const parar = () => {
        setStatus("Parado")
        setCount(0)
    }
    
    return (
        <HomeView 
            count={count}
            status={status}
            iniciar={iniciar}
            pausar={pausar}
            parar={parar}
            /> //Chamando o View
    )
}
export default HomeController;