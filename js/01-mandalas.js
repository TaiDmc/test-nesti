export default async function mandalas(selector) {
  const $selector = document.querySelector(selector);
  $selector.style.opacity = "0";

  let res = await fetch("assets/mandalas.md")
    .then((res) => (res.ok ? res.text() : Promise.reject(res)))
    .then((text) => {
      const html = new showdown.Converter().makeHtml(text);
      $selector.innerHTML = html;

      // Extraction of p nodes
      let mandalasInPairs = [];
      let mandala = [];
      $selector.querySelectorAll("p").forEach((p, i) => {
        if (i % 2 === 0) {
          mandala.push(p);
        } else if (i % 2 !== 0) {
          mandala.push(p);
          mandalasInPairs.push(mandala);
          mandala = [];
        }
      });
      $selector.innerHTML = "";

      // Election of a mandala
      const mandalaElection =
        mandalasInPairs[Math.floor(Math.random() * mandalasInPairs.length)];

      // Inyection of the mandala in the selector
      mandalaElection.forEach((text) => {
        $selector.append(text);
      });
      $selector.style.opacity = "1";
    })
    .catch((err) => {
      console.log(err);
      let message = err.statusText || "Ocurrio un Error";

      $selector.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
    });
}
