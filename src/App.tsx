import React from 'react';
import './App.css';
import {Header} from "./component/header/Header";
import {Main} from "./component/main/Main";
import {Skils} from "./component/skils/Skils";


function App() {
  return (
    <div className="App">
        <Header/>
        <Main />
        <Skils/>
    </div>
  );
}

export default App;
