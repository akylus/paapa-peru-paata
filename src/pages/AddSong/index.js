import "./index.scss";
// import Song from "../../models/Song";
// import songsData from "../../data";
import { useState } from "react";

function AddSong() {
  const [id, setId] = useState("");
  // const [timestamp, setTimestamp] = useState("");

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  // const handleTimeStampChange = (e) => {
  //   setTimestamp(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    let actualId = id;
    if (id.includes("youtube.com")) {
      actualId = id.split("=").pop().slice(0, 11);
    }
    if (id.includes("youtu.be")) {
      actualId = id.split("/").pop().slice(0, 11);
    }
  };

  return (
    <div>
      <p className="subtitle">Add a telugu song which has a girl's name</p>
      <form onSubmit={handleSubmit} className="c-form">
        <input
          type="text"
          id="video-id"
          placeholder="Enter the video URL or just the ID"
          className="input-field"
          onChange={handleIdChange}
        ></input>

        <input
          type="text"
          id="video-timestamp"
          placeholder="Enter the starting timestamp (Optional)"
          className="input-field"
          // onChange={handleTimeStampChange}
        ></input>
        <button type="submit" className="button">
          <i className="fas fa-plus button"></i>
        </button>
      </form>
      <p className="title" style={{ color: "red" }}>
        Too lazy to add a server for this.
      </p>
      <p className="title" style={{ color: "red" }}>
        Just tell me the song name LMAO
      </p>
    </div>
  );
}

export default AddSong;
