import "./App.css";
import SnowBall from "./SnowBall/SnowBall";
import SnowItem from "./SnowItem/SnowItem";
import "jquery-snowfall";
import { useState, useEffect } from "react";

// document.addEventListener("DOMContentLoaded", () => {
//   const qwe = document.querySelector(".App");
//   console.log(qwe);
//   window.$(document).snowfall({ maxSpeed: 1, minSize: 5 });
//   window.$(document).snowfall({ collection: qwe });
// });

function App() {
  const [snowBalls, setSnowBalls] = useState([]);
  const [count, setCount] = useState(0);

  const handleItem = (el) => {
    const element = el.target.dataset.snow;
    const snows = snowBalls;
    console.log(element);
    snows.splice(element, 1);
    setSnowBalls(snows);
  };

  const addSnowBals = (el) => {
    const snows = snowBalls;
    snows.push(el);
    setSnowBalls(snows);
  };

  useEffect(() => {
    let counter = count;
    const interval = setInterval(() => {
      if (counter >= 5) {
        clearInterval(interval);
      } else {
        setCount((count) => count + 1);
        addSnowBals(counter);
        counter++;
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
      <div
        className="snowfall-container"
        aria-hidden="true"
        role="presentation"
      >
        {snowBalls.map((item) => {
          return <SnowBall handleItem={handleItem} key={item} snow={item} />;
        })}

        {/* <SnowBall />
        <SnowBall />
        <SnowBall />
        <SnowItem />
        <SnowItem /> */}
      </div>
    </div>
  );
}

export default App;
