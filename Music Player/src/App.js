import React from 'react';
import TrackList from "./TrackList";
import PlayerControl from "./PlayerControl";
import { MusicPlayerProvider } from "./MusicPlayerContext";

function App() {
  return (
    <MusicPlayerProvider>
      <div className="container">
        <TrackList />
        <PlayerControl />
      </div>
    </MusicPlayerProvider>
  );
}

export default App;