export default (text = "Hello  Webpack is running") => {
  const element = document.createElement("div");

  element.innerHTML = text;

  return element;
};
