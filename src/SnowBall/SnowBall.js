import "./snowBall.css";
import ReactDOM from "react-dom";
import React from "react";
import { useState, useEffect, useRef } from "react";

const period = [
  (n) => 5 * Math.sin(n),
  (n) => 8 * Math.cos(n),
  (n) => 5 * (Math.sin(n) * Math.cos(2 * n)),
  (n) => 2 * (Math.sin(0.25 * n) - Math.cos(0.75 * n) + 1),
  (n) => 5 * (Math.sin(0.75 * n) + Math.cos(0.25 * n) - 1),
];

function Graphic(props) {
  const spanEl = useRef(null);

  const paint = () => {
    const flake = spanEl.current;
  };

  useEffect(() => {
    paint();
  }, []);

  return (
    <span
      ref={spanEl}
      style={{ transform: props.transform }}
      className="snowflake"
    >
      ❄
    </span>
  );
}

class SnowBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trans_x: null,
      trans_y: null,
      trans_z: null,
    };
    this.tick = this.tick.bind(this);
    this.test = this.test.bind(this);
  }

  componentDidMount() {
    this.test();
  }

  test() {
    let x = Math.random() * 100;
    let y = 0;
    let z = Math.random() < 0.1 ? Math.ceil(Math.random() * 100) + 25 : 0;
    let l = Math.ceil(Math.random() * 4000) + 6000;
    let orig = Math.ceil(Math.random() * 4000) + 6000;
    let per = Math.floor(Math.random() * period.length);

    this.setState(
      {
        trans_x: x,
        trans_y: y,
        trans_z: z,
        life: l,
        origlife: orig,
        periodfunction: per,
      },
      () => {
        console.log(this.state);
        requestAnimationFrame(this.tick);
      }
    );
  }

  tick() {
    const {
      trans_x,
      trans_y,
      trans_z,
      life,
      origlife,
      periodfunction,
    } = this.state;

    let y = trans_y + 0.2;
    let orig = origlife;
    let curLife = life;
    let dt = (orig - curLife) / orig;
    if (dt <= 1.5) {
      let p = period[periodfunction];
      let x = p(dt * 2 * Math.PI) + trans_x / 100;
      console.log(dt);
      curLife -= 1000 / 60;
      this.setState({ trans_y: y, trans_x: x, life: curLife }, () =>
        requestAnimationFrame(this.tick)
      );
    } else {
      this.test();
    }
  }

  render() {
    return (
      <div
        className="snowfall-container"
        aria-hidden="true"
        role="presentation"
      >
        <Graphic
          transform={`translate3d(${this.state.trans_x}vw, ${this.state.trans_y}vh, ${this.state.trans_z}px)`}
        />
      </div>
    );
  }
}

export default SnowBall;
