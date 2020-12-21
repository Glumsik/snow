import "./App.css";
import SnowBall from "./SnowBall/SnowBall";
import SnowItem from "./SnowItem/SnowItem";

import { useState, useEffect } from "react";

function App() {
  const [snowBalls, setSnowBalls] = useState([]);
  const [countSnow, setCountSnow] = useState(0);
  const [count, setCount] = useState(0);

  const handleItem = (el) => {
    const element = Number(el.target.dataset.snow);
    const newArr = snowBalls.filter((item) => {
      console.log(item, element);
      return item !== element;
    });
    setSnowBalls(newArr);
    setCountSnow(countSnow + 1);
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
  console.log(snowBalls);
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
        <div className="snow_ball_count">{countSnow}</div>

        <div className="tree"></div>
        {/* <SnowBall />
        <SnowBall />
        <SnowBall />
        <SnowItem />
        <SnowItem /> */}
        <div className="tree">
          <img src="./img/tree.svg"></img>
        </div>
      </div>
    </div>
  );
}

export default App;
