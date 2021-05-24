import _ from "lodash";

const root = document.getElementById("root");

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "Webpack"], " ");

  return element;
}

root.appendChild(component());
