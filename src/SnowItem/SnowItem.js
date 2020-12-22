import "./snowItem.css";
import ReactDOM from "react-dom";
import React from "react";
import { useState, useEffect, useRef } from "react";

const period = [
  (n) => 0.05 * Math.sin(n),
  (n) => 0.05 * Math.cos(n),
  (n) => 0.05 * (Math.sin(n) * Math.cos(2 * n)),
  (n) => 0.08 * (Math.sin(0.25 * n) - Math.cos(0.75 * n) + 1),
  (n) => 0.05 * (Math.sin(0.75 * n) + Math.cos(0.25 * n) - 1),
];

const fun = ["⛄", "🎁", "🦌", "🍪"];

function Graphic(props) {
  return (
    <span
      style={{ transform: props.transform }}
      className="snowflake"
      onClick={props.handleItem}
    >
      {props.icon}
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
    this.create = this.create.bind(this);
  }

  componentDidMount() {
    this.create();
  }

  create() {
    let x = Math.random() * 100;
    let y = 0;
    let z = Math.random() < 0.4 ? Math.ceil(Math.random() * 100) + 25 : 0;
    let life = Math.ceil(Math.random() * 4000) + 6000;
    let orig = life;
    let per = Math.floor(Math.random() * period.length);
    let snowItem = fun[Math.floor(Math.random() * fun.length)];
    this.setState(
      {
        trans_x: x,
        trans_y: y,
        trans_z: z,
        life: life,
        origLife: orig,
        periodfunction: per,
        item: snowItem,
      },
      () => {
        requestAnimationFrame(this.tick);
      }
    );
  }

  tick() {
    const { trans_x, life, origLife, periodfunction } = this.state;

    let curLife = life;
    let dt = (origLife - curLife) / origLife;

    if (dt <= 1.0) {
      let y = 100 * dt;
      let p = period[periodfunction];
      let x = p(dt * 2 * Math.PI) + trans_x;

      curLife -= 1000 / 60;

      this.setState({ trans_y: y, trans_x: x, life: curLife }, () => {
        requestAnimationFrame(this.tick);
      });
    } else {
      this.create();
    }
  }

  render() {
    return (
      <Graphic
        transform={`translate3d(${this.state.trans_x}vw, ${this.state.trans_y}vh, ${this.state.trans_z}px)`}
        icon={this.state.item}
        handleItem={this.props.handleItem}
      />
    );
  }
}

export default SnowBall;
