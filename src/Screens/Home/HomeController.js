import React, {useState, useEffect, useRef} from 'react';
import HomeView from './HomeView'

const  HomeController = () => {

    const [count, setCount] = useState(0)
    const [status, setStatus] = useState("Parado")
    const manageInterval = useRef(null);


    useEffect(() => {
        console.log("Depois de alterar o status");
        manageInterval.current = setInterval(() => {
            console.log("Info Running");
            if(status === "Rodando"){
                setCount(count => count + 1)
            }            
        }, 1000);

        return () => {
            console.log("Antes de renderizar ao mudar o status");
            clearInterval(manageInterval.current);
        }
    },[status])

    useEffect(() => {
        console.log("Depois de montar o componente");
        return () => {
            console.log("Antes de desmontar o componente");
            clearInterval(manageInterval.current);
        };
    }, [])

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