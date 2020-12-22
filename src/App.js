import "./App.css";
import SnowBall from "./SnowBall/SnowBall";
import SnowItem from "./SnowItem/SnowItem";
import Gift from "./Gift/Gift";

import { useState, useEffect } from "react";

const fun = ["❄", "⛄", "🎁", "🦌", "🍪"];

function App() {
  const [snowBalls, setSnowBalls] = useState([]);
  const [countSnow, setCountSnow] = useState(0);
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(10);

  const handleItem = (el) => {
    const element = Number(el.target.dataset.snow);
    const newArr = snowBalls.filter((item) => {
      console.log(item, element);
      return item !== element;
    });
    setSnowBalls(newArr);
    setCountSnow(countSnow + 1);
    setTimer(timer + 2);
  };

  const addSnowBals = (el) => {
    const snows = snowBalls;
    snows.push(el);
    setSnowBalls(snows);
  };

  useEffect(() => {
    let counter = count;
    const interval = setInterval(() => {
      if (counter >= 20) {
        clearInterval(interval);
      } else {
        setCount((count) => count + 1);
        addSnowBals(counter);
        counter++;
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let counter = timer;
    const interval = setInterval(() => {
      if (counter < 1) {
        clearInterval(interval);
      } else {
        setTimer((timer) => timer - 1);
        counter--;
        console.log(counter);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const randowItem = () => {
    let snowItem = fun[Math.floor(Math.random() * fun.length)];
    console.log(snowItem);
    return snowItem;
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <div
        className="snowfall-container"
        aria-hidden="true"
        role="presentation"
      >
        <div>
          {snowBalls.map((item) => {
            console.log(randowItem());
            return (
              <SnowBall
                handleItem={handleItem}
                key={item}
                snow={item}
                snowItem={randowItem()}
              />
            );
          })}
          <SnowItem />
          <SnowItem />
        </div>
        <div className="snow_ball_count">{countSnow}</div>
        <div className="snow_ball_timer">{timer}</div>

        <div className="tree"></div>

        <Gift />

        <div className="tree">
          <img src="./img/tree.svg"></img>
        </div>
      </div>
    </div>
  );
}

export default App;
