import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import SearchResult from "./SearchResult/SearchResult";
import Playlist from "./Playlist/Playlist";
import Track from "./Track/Track";

function App() {
  const musicArray = [
    {
      id: 1,
      name: "Party",
      artist: "Chris Brown",
      album: "Heartbreak on a Full Moon",
    },
    {
      id: 2,
      name: "Meridian",
      artist: "Dave feat.Tiakola",
      album: "Meridian & Special",
    },
    {
      id: 3,
      name: "Trojan Horse",
      artist: "Central Cee & Dave",
      album: "Split Decision",
    },
  ];
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState("");
  const [savedPlaylist, setSavedPlaylist] = useState([]);

  useEffect(() => {
    console.log(savedPlaylist);
  });

  const addToPlaylist = (music) => {
    removeToPlaylist(music);
    setPlaylistTracks((prevPlaylistTracks) => {
      return [...prevPlaylistTracks, music];
    });
  };

  const removeToPlaylist = (musicToRemove) => {
    setPlaylistTracks((prevPlaylistTracks) => {
      return prevPlaylistTracks.filter(
        (music) => music.id !== musicToRemove.id
      );
    });
  };

  const saveToPlaylist = (music) => {
    setSavedPlaylist((prevSavedPlaylist) => {
      return { ...prevSavedPlaylist, music, playlistName };
    });
    setPlaylistTracks((prevPlaylistTracks) => {
      return [];
    });
    setPlaylistName((prevPlaylistName) => {
      return "";
    });
  };

  const inputName = (e) => {
    setPlaylistName(e.target.value);
  };

  return (
    <div className="App">
      <header className="header">
        <div className="LOGO">
          not<span className="purple_color">Music</span>
        </div>
      </header>
      <SearchBar />
      <div className="layout">
        <SearchResult
          musicArray={musicArray}
          addToPlaylist={addToPlaylist}
          removePlaylist={removeToPlaylist}
        />
        <Playlist
          tracks={playlistTracks}
          removeToPlaylist={removeToPlaylist}
          saveToPlaylist={saveToPlaylist}
          value={playlistName}
          inputName={inputName}
        />
      </div>
    </div>
  );
}

export default App;
