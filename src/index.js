import _ from "lodash";
import "./style.css";
import logo from "./assets/webpack-logo.png";

const root = document.getElementById("root");

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "Webpack"], " ");
  element.classList.add("hello");

  const logoWebpack = new Image();
  logoWebpack.src = logo;

  element.appendChild(logoWebpack);

  return element;
}

root.appendChild(component());
