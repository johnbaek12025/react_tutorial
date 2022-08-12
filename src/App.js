import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Page'

function App(){                
    return(        
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/movie/:id" element={<Detail />}/>                
                <Route path="/" element={<Home />}/>
            </Routes>
        </Router>        
        );  
};
export default App;

