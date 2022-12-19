const d = document;

export default function scrollTopBtn() {
  let $btnTop = d.querySelector(".scroll-top-btn");

  window.addEventListener("scroll", (e) => {
    let pageTop = window.pageYOffset || d.documentElement.scrollTop;
    console.log(window.pageYOffset);

    if (pageTop > 10) {
      $btnTop.classList.remove("hidden");
    } else {
      $btnTop.classList.add("hidden");
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target != $btnTop) return;

    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  });
}
