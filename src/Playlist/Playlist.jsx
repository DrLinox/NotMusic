import React, { useState } from "react";
import styles from "./playlist.module.css";
import Track from "../Track/Track";

const Playlist = ({
  tracks,
  removeToPlaylist,
  saveToPlaylist,
  value,
  inputName,
}) => {
  return (
    <div className={styles.playlistContainer}>
      <input
        type="text"
        className={styles.trackName}
        value={value}
        onChange={inputName}
      />
      <Track tracks={tracks} removeToPlaylist={removeToPlaylist} />
      <button
        type="submit"
        className={styles.saveButton}
        onClick={() => {
          saveToPlaylist(tracks);
        }}
      >
        Save To Spotify
      </button>
    </div>
  );
};

export default Playlist;
