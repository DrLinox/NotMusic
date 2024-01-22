import React from "react";
import styles from "./tracklist.module.css";

const TrackList = ({ tracks, addToPlaylist, removePlaylist }) => {
  const listVerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  };
  const listHorStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  };
  const ArtistName = {
    opacity: "50%",
    textTransform: "upperCase",
  };
  return (
    <ul className={styles.lists}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "600", color: "white" }}>
        Results
      </h1>
      {tracks.map((track) => {
        return (
          <li key={track.id}>
            <div style={listHorStyle}>
              <div style={listVerStyle}>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "700" }}>
                  {track.name}
                </h2>{" "}
                <p style={ArtistName}>
                  {track.artist} | {track.album}
                </p>
              </div>
              <i
                class="fa-solid fa-plus"
                style={{ color: "white", cursor: "pointer" }}
                onClick={() => addToPlaylist(track)}
              ></i>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TrackList;
