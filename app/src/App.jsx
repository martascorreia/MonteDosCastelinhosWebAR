import React from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { routes } from './routes';

function App() {
  return (
    <div className="App" id="app">
      <HashRouter>
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;