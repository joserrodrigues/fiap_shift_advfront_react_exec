import React from 'react';
import HomeView from './HomeView'

class HomeController extends React.Component {

    constructor() {
        super();        
        this.state = {
            count: 0,
            status: "Parado"
        };
    }

    componentDidMount = () => {
        this.manageInterval = setInterval(() => {
            if(this.state.status === "Rodando"){
                this.setState({
                    count: this.state.count + 1
                })
            }
        }, 1000);
    }

    componentWillUnmount = () => {
        clearInterval(this.manageInterval);
    }

    iniciar = () => {
        this.setState({
            status: "Rodando"
        })
    }

    pausar = () => {
        this.setState({
            status: "Pausado"
        })
    }

    parar = () => {
        this.setState({
            status: "Parado",
            count: 0
        })
    }
    render() {
        return (
            <HomeView 
                count={this.state.count}
                status={this.state.status}
                iniciar={this.iniciar}
                pausar={this.pausar}
                parar={this.parar}
                /> //Chamando o View
        )
    }
}
export default HomeController;