import "./App.css";
import SnowBall from "./SnowBall/SnowBall";
import "jquery-snowfall";

function App() {
  // document.addEventListener("DOMContentLoaded", () => {
  //   const qwe = document.querySelector(".test");
  //   console.log(qwe);
  //   window.$(document).snowfall({ maxSpeed: 1, minSize: 5 });
  //   window.$(document).snowfall({ collection: qwe });
  // });

  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="test">
        <SnowBall />
      </div>
    </div>
  );
}

export default App;
