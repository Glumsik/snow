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
        <li class="red"></li>
        <li class="yellow"></li>
      </div>
    </div>
  );
}

export default Graphic;
