import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Components/Home';
import Ground from './Components/Ground';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Five from './Components/Five';
import Feeling from './Components/Feeling';
import Profile from './Components/Profile';
import Result from './Components/Result';
import Senses from './Components/Senses';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
      <Routes>
        <Route exact path="/" element={<App />} />
          {/* these are nested within "/" App */}
        <Route path="/home" element={<Home />} />
        <Route path="/ground" element={<Ground />} />
        <Route path="/five" element={<Five />} />
        <Route path="/feeling" element={<Feeling />} />
        <Route path="/result" element={<Result />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/senses" element={<Senses />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
