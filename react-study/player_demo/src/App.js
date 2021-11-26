import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Player } from 'video-react';

function App() {
  return (
    <div className="App">
      <Player
        fluid={false}
        width={200}
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      />
    </div>
  );
}

export default App;
