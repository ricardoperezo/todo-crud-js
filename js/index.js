import Model from "./model.js";
import View from "./view.js";

// Make sure DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const model = new Model();
  const view = new View();
  model.setView(view);
  view.setModel(model);

  view.render();
});
