const d = document;
import ontop from "./js/00-ontop.js";
import mandalas from "./js/01-mandalas.js";

d.addEventListener("DOMContentLoaded", async (e) => {
  ontop();
  mandalas(".mandalas-dynamic cite");
});
