import React from 'react';
import './App.css';
import {Header} from "./component/header/Header";
import {Main} from "./component/main/Main";
import {Skils} from "./component/skils/Skils";
import {Works} from "./component/works/Works";
import {Distant} from "./component/distant/Distant";
import {Contacts} from "./component/contacts/Contacts";
import {Footer} from "./component/footer/Footer";


function App() {
  return (
    <div className="App">
        <Header/>
        <Main />
        <Skils/>
        <Works/>
        <Distant/>
        <Contacts/>
        <Footer/>
    </div>
  );
}

export default App;
