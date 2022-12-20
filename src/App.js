import "./styles.css";
import React, { useState } from "react";

var genres = {
  Action: [
    { name: "Don", lang: "Hindi", rating: "7.9" },
    { name: "The Dark Knight", lang: "English", rating: "8.9" },
    { name: "Avengers", lang: "English", rating: "8.7" }
  ],
  Comedy: [
    { name: "Hera Pheri", lang: "Hindi", rating: "6.7" },
    { name: "The man from toronto", lang: "English", rating: "8.2" },
    { name: "The takedown", lang: "English", rating: "7.5" }
  ],
  Romance: [
    { name: "Rosaline", lang: "English", rating: "3.3" },
    { name: "Love aaj kal", lang: "Hindi", rating: "4.0" },
    { name: "Focus", lang: "English", rating: "7.4" }
  ],
  Horror: [
    { name: "Bhootnath", lang: "Hindi", rating: "6.5" },
    { name: "Barbarian", lang: "English", rating: "3.7" },
    { name: "Pari", lang: "Hindi", rating: "46.0" }
  ]
};

var genresList = Object.keys(genres);

export default function App() {
  var [crntGenre, setCrntGenre] = useState("Action");

  function genreHandler(genre) {
    setCrntGenre(genre);
  }

  return (
    <div className="App">
      <h1>MovieWise</h1>
      <h2>Alright. What are we watching next?</h2>
      <h3>Pick a Genre: </h3>
      <div class="buttons">
        {genresList.map((item) => {
          return (
            <button key={item} onClick={() => genreHandler(item)}>
              {item}
            </button>
          );
        })}
      </div>
      <div>
        <ul>
          {genres[crntGenre].map((item) => {
            return (
              <li key={item.name}>
                <h4>{item.name}</h4>
                <small>{item.lang}</small>
                <p>
                  Letterboxd Rating: <span>{item.rating}</span>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
