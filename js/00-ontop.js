const d = document;

export default function ontop() {
  d.addEventListener("click", (e) => {
    if (e.target.matches("#ontop")) {
      alert("te dije que no lo tocaras🤨");
      window.open(
        "https://open.spotify.com/track/3wtpvCD9fqcEqyaRkdvtzy?si=ce73e4a3ff58488a"
      );
    }
  });
}
