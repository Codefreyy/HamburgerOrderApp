import React from 'react';
import Meals from "./Components/Meals";

//设置移动端的适配
document.documentElement.style.fontSize = 100 / 750 + 'vw';

const App = () => {

    return (
        <>
            <div style={{ width: '750rem' }}>
                <Meals />
            </div>
        </>
    );
};

export default App;