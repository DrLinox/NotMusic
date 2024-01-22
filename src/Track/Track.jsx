import React from "react";
import styles from "./track.module.css";

const Track = ({ tracks, removeToPlaylist }) => {
  const listHorStyle = {
    display: "flex",
    flexDirection: "column",
  };
  const listVerStyle = {
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
      {tracks.map((track) => {
        return (
          <li key={track.id}>
            <div style={listVerStyle}>
              <div style={listHorStyle}>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "700" }}>
                  {track.name}
                </h2>{" "}
                <p style={ArtistName}>
                  {track.artist} | {track.album}
                </p>
              </div>
              <i
                class="fa-solid fa-minus"
                style={{ color: "white", cursor: "pointer" }}
                onClick={() => removeToPlaylist(track)}
              ></i>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Track;
