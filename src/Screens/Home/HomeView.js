import React from 'react';
import './Home.css';

function HomeView({count, onClickButton}) {
    return (
        <div className="divInfo">
            <div className="App">Contador - {count}  </div>
            <button onClick={onClickButton}>Click Me</button>
        </div>
        

    );
}
export default HomeView;