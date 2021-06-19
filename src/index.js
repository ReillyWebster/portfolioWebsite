import ReactDOM from "react-dom";
import App from "./App";
import "semantic-ui-css/semantic.min.css";

const rootElement = document.getElementById("root");

function render() {
  ReactDOM.render(<App />, rootElement);
}

if (module.hot) {
  module.hot.accept("./App", function () {
    setTimeout(render);
  });
}

render();
