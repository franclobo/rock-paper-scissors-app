import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StepOne from './components/stepOne';
import './App.scss';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<StepOne />} />
      </Routes>
    </Router>


  );
}

export default App;
