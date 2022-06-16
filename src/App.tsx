import React from 'react';
import './App.css';
import {Navigation, PATH} from "./component/navigation/Navigation";
import {Navigate, Route, Routes} from "react-router-dom";
// import {Header} from "./component/header/Header";
import {Main} from "./component/main/Main";
import {Skills} from "./component/skils/Skills";
// import {Works} from "./component/works/Works";
// import {Distant} from "./component/distant/Distant";
// import {Contacts} from "./component/contacts/Contacts";
// import {Footer} from "./component/footer/Footer";


function App() {
  return (
    <div className="App">
        <Navigation/>

        <Routes>
            <Route path={'/'} element={<Navigate to={PATH.MAIN}/>}/>
            <Route path={PATH.MAIN} element={<Main/>}></Route>
            <Route path={PATH.SKILLS} element={<Skills/>}></Route>

        </Routes>


    </div>
  );
}

export default App;

/*
function App() {
    return (
        <div className="App">
            <Header/>
            <Main />
            <Skills/>
            <Works/>
            <Distant/>
            <Contacts/>
            <Footer/>
        </div>
    );
}*/
