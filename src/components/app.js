import React from 'react';

const App = () => {
    return (
    <Counter 
        inc={inc}
        dec={dec}
        res={res}
        counter={getState()}
    />)
};

export default App;