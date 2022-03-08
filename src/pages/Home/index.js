import "./index.scss";
import Song from "../../models/Song";
import songsData from "../../data";
import React, { useState } from "react";
import NamesModal from "../../components/NamesModal";
import { useEffect } from "react";

function Home() {
  const [name, setName] = useState("");
  const [searched, setSearched] = useState(false);
  const [searchExists, setSearchExists] = useState(false);
  const [song, setSong] = useState(new Song("", ""));
  const [approx, setApprox] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const [isSearchMode, setIsSearchMode] = React.useState(true);

  useEffect(() => {
    console.log("conmingf gere")
    if(isSearchMode) return;
    handleSubmit();
  }, [name]);

  const closeNameModal = () => {
    setModalShow(false);
    const nameFromStorage = localStorage.getItem("name");
    if (!nameFromStorage) return;
    localStorage.setItem("name", "");
    setName(nameFromStorage);
  };

  const openNameModal = () => {
    setIsSearchMode(false);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const fetchResults = () => {
    let result = songsData.find(
      (songName) => songName.name === name.toLowerCase()
    );
    if (result) {
      setApprox(false);
      return result;
    } else {
      result = songsData.find((songName) =>
        songName.consonants.includes(name.toLowerCase().replace(/[aeiou]/g, ""))
      );
      setApprox(true);
      return result;
    }
  };

  const handleSubmit = (e) => {
    if(e) e.preventDefault();
    if(!name) return;
    setSearched(true);
    let songResult = fetchResults();
    if (!songResult) {
      setSearchExists(false);
    } else {
      setSong(new Song(songResult.id, songResult.timestamp));
      setSearchExists(true);
    }
    setIsSearchMode(true);
  };

  return (
    <div>
      <p className="text-5xl leading-relaxed md:text-5xl select-none">
        <span
          className="underline decoration-1 underline-offset-4 cursor-pointer"
          onClick={() => setModalShow(true)}
        >
          ఈ అమ్మాయి
        </span>{" "}
        పేరుతో ఏదైనా పాట ఉందా?
      </p>
      <p className="text-lg md:text-3xl m-8">
        Search a name to see if a Telugu song exists
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ex: Madhu"
          value={name}
          className="
            bg-transparent 
            px-6 py-2 mb-4
            border border-solid border-white rounded-full 
            text-white text-lg 
            placeholder:text-grey-100
          "
          onChange={handleInputChange}
        ></input>
        <button
          type="submit"
          className="bg-transparent border-none text-white text-lg px-5"
        >
          <i className="fas fa-search button"></i>
        </button>
      </form>

      {searched && searchExists && (
        <React.Fragment>
          {approx && (
            <p className="text-md text-amber-500 mb-2 font-semibold">
              exactగా దొరకలేదు. ఇదేమో చూడు...{" "}
            </p>
          )}
          <div className="hidden md:flex flex justify-center">
            <iframe
              src={`https://www.youtube.com/embed/${song.id}?controls=0&start=${
                song.timestamp ? song.timestamp : "0"
              }&autoplay=1`}
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
              title="video"
              width="560"
              height="315"
            />
          </div>
          <div className="flex justify-center resp-container flex md:hidden">
            <iframe
              className="responsive-iframe"
              src={`https://www.youtube.com/embed/${song.id}?controls=0&start=${
                song.timestamp ? song.timestamp : "0"
              }`}
              // src="https://www.youtube.com/embed/5IEbR79kBPY?controls=0&start=40&autoplay=1"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
              title="video"
            />
          </div>
        </React.Fragment>
      )}
      {searched && !searchExists && (
        <div>
          <p className="text-2xl text-red-600 my-2 font-medium">
            ఆ పేరుతో పాట ఏదీ దొరకలేదు, bro!
          </p>
          <p className="text-xl text-red-600 my-2 font-medium">
            ఈ పాటతో సరిపెట్టుకోండి.
          </p>
          <div className="hidden md:flex mt-4 flex justify-center">
            <iframe
              src="https://www.youtube.com/embed/pXcWL59zar4?controls=0&start=51&autoplay=1"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
              title="video"
              width="560"
              height="315"
            />
          </div>
          <div className="mt-4 flex justify-center resp-container flex md:hidden">
            <iframe
              className="responsive-iframe"
              src="https://www.youtube.com/embed/pXcWL59zar4?controls=0&start=51"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
              title="video"
            />
          </div>
        </div>
      )}

      <a
        className="absolute inset-x-0 bottom-0 m-2 text-xs text-gray-600 no-underline font-mono"
        href="https://github.com/akylus"
      >
        github.com/akylus
      </a>
      <NamesModal
        show={modalShow}
        songsData={songsData}
        onShow={() => openNameModal()}
        onHide={() => closeNameModal()}
      />
    </div>
  );
}

export default Home;
