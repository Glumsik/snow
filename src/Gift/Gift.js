import "./gift.css";

import React from "react";

function Graphic() {
  return (
    <div>
      <div className="gift_1">
        <div className="gift_1-top"></div>
        <div className="gift_1-box"></div>
      </div>
      <div className="gift_2">
        <div className="gift_2-top"></div>
        <div className="gift_2-box"></div>
      </div>

      <div class="gift-holder">
        <div class="gift">
          <div class="ribbon"></div>
        </div>
        <div class="gift orange">
          <div class="ribbon"></div>
        </div>
      </div>
      <div className="left">
        <li class="red"></li>
        <li class="yellow"></li>
        <li class="pink"></li>
        <li class="blue"></li>
      </div>
      <div className="right">
        <li class="green"></li>
        <li class="red"></li>
        <li class="green"></li>
        <li class="blue"></li>
      </div>
    </div>
  );
}

export default Graphic;
