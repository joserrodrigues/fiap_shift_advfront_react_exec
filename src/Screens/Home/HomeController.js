import React from 'react';
import HomeView from './HomeView'

class HomeController extends React.Component {

    constructor() {
        super();        
        this.state = {
            count: 0
        };
    }

    onClickButton = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <HomeView 
                count={this.state.count}
                onClickButton={this.onClickButton}
                /> //Chamando o View
        )
    }
}
export default HomeController;