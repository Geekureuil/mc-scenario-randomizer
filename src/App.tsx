import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "./views/Home";
import {VilainList} from "./views/VilainList";
import {ModularList} from "./views/ModularList";
import {Randomizer} from "./views/Randomizer";

function App() {
    const [randomizerKey, setRandomizerKey] = useState<number>(0);

    const refresh = () => {
        setRandomizerKey(randomizerKey + 1);
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home refresh={refresh}/>}>
                    <Route path="vilain-list" element={<VilainList/>}/>
                    <Route path="modular-list" element={<ModularList/>}/>
                    <Route path="randomizer" element={<Randomizer key={randomizerKey}/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
