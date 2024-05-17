import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

// Ensure correct import if default exported
import AppRouter from './Approuter';













function App() {
  return (
    <div>
      <BrowserRouter>





        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
