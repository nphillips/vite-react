import { useState } from "react";
import { puppyList } from "./data.js";
import "./App.css";
import IconClose from "./components/IconClose.jsx";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  console.log("puppyList: ", puppyList);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);

  function handleClick(id) {
    if (id === featPupId) {
      setFeatPupId(null);
    } else {
      setFeatPupId(id);
    }
  }
  return (
    <div
      className={`App main ${
        !featPupId ? "main--details-hidden" : "main--details-visible"
      }`}
    >
      <div className="left-nav">
        {puppies.map((puppy) => {
          return (
            <div
              onClick={() => handleClick(puppy.id)}
              key={puppy.id}
              className={`left-nav__link ${
                puppy.id === featPupId ? "left-nav__link--active" : ""
              }`}
            >
              {puppy.name}
            </div>
          );
        })}
      </div>

      {featPupId && (
        <div className="featured">
          <button className="button-close" onClick={() => handleClick(null)}>
            <IconClose />
          </button>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
