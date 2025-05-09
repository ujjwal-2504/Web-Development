function customRender(reactElement, mainContainer) {
  const newElement = document.createElement(reactElement.type);
  newElement.innerHTML = reactElement.children;

  for (let att in reactElement.props) {
    if (att == "children") continue;

    newElement.setAttribute(att, reactElement.props[att]);
  }

  mainContainer.appendChild(newElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit",
};

const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer);
