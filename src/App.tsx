import React from 'react';
import './App.css';
import {Header} from "./component/header/Header";
import {Main} from "./component/main/Main";
import {Skils} from "./component/skils/Skils";
import {Works} from "./component/works/Works";


function App() {
  return (
    <div className="App">
        <Header/>
        <Main />
        <Skils/>
        <Works/>
    </div>
  );
}

export default App;
