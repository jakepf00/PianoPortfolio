import React from 'react';
import logo from './logo.svg';
import './App.css';
import { About } from './components/About'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <main>
      <Navbar />
      <About />
    </main>
  );
}

export default App;
