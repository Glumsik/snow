import "./App.css";
import SnowBall from "./SnowBall/SnowBall";
import SnowItem from "./SnowItem/SnowItem";
import LogoItem from "./LogoItem/LogoItem";
import Gift from "./Gift/Gift";

import { useState, useEffect } from "react";

function App() {
  const [snowBalls, setSnowBalls] = useState([]);
  const [countSnow, setCountSnow] = useState(0);

  const [logo, setLogo] = useState([]);
  const [countLogo, setCountLogo] = useState(0);

  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(10);

  const handleItem = (el) => {
    const element = Number(el.target.dataset.snow);
    const newArr = snowBalls.filter((item) => {
      console.log(item, element);
      return item !== element;
    });
    setSnowBalls(newArr);
    setTimer(timer + 5);
  };

  const handleItemLogo = (el) => {
    const element = Number(el.target.dataset.logo);
    console.log(element);
    const newArr = snowBalls.filter((item) => {
      return item !== element;
    });
    setLogo(newArr);
    setCountSnow(countSnow + 1);
  };

  const addSnowBals = (el) => {
    const snows = snowBalls;
    snows.push(el);
    setSnowBalls(snows);
  };

  const addLogo = (el) => {
    const logs = logo;
    logs.push(el);
    setLogo(logs);
  };

  useEffect(() => {
    let counter = countLogo;
    const interval = setInterval(() => {
      if (counter >= 10) {
        clearInterval(interval);
      } else {
        setCountLogo((countLogo) => countLogo + 1);
        addLogo(counter);
        counter++;
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let counter = count;
    const interval = setInterval(() => {
      if (counter >= 10) {
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
            return <SnowBall handleItem={handleItem} key={item} snow={item} />;
          })}
          <SnowItem />
          <LogoItem />
        </div>
        <div>
          {logo.map((item) => {
            return (
              <LogoItem handleItem={handleItemLogo} key={item} logo={item} />
            );
          })}
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
