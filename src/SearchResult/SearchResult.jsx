import React, { useState } from "react";
import "./searchresult.module.css";
import TrackList from "../TrackList/TrackList";

const SearchResult = ({ musicArray, addToPlaylist, removePlaylist }) => {
  const [searchResults, setSearchResults] = useState(musicArray);
  return (
    <>
      <TrackList
        tracks={searchResults}
        addToPlaylist={addToPlaylist}
        removePlaylist={removePlaylist}
      />
    </>
  );
};

export default SearchResult;
