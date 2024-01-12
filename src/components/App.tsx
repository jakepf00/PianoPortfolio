import React from 'react';
import '../CSS/App.css';
import '../CSS/Style.css'
import { About } from './About'
import { Listen } from './Listen'
import { PianoNavbar } from './PianoNavbar'

function App() {
  return (
    <div className="App">
      <PianoNavbar />
      <About />
      <Listen />
    </div>
  );
}

export default App;
