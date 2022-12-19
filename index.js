const d = document;
import scrollTopBtn from "./02-scroll-top-btn.js";
import ontop from "./js/00-ontop.js";
import mandalas from "./js/01-mandalas.js";

d.addEventListener("DOMContentLoaded", async (e) => {
  ontop();
  mandalas(".mandalas-dynamic cite");
  scrollTopBtn();
});
