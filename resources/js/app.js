require('./bootstrap');
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import Team from './components/Team/Team';
import Driver from './components/Driver/Driver';

// Renderizando o componente React
ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/new-team' element={<Team />} />
            <Route path='/edit-team/:id' element={<Team />} />
            <Route path='/new-driver' element={<Driver />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('react-app')
);
