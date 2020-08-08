import React from 'react';
import './App.css';
import ViewSongs from './components/ViewSongs'
import FavoriteSongs from './components/FavoriteSongs'
import CreateSong from './components/CreateSong'


function App() {

  return (
    <div className="App">
      <header>TUNr</header>
      <div className="component-ctn"><ViewSongs/>
    <FavoriteSongs/>
    <CreateSong/></div>
    
    </div>
  );
}

export default App;
