document.querySelector(".btn-mobile-nav").addEventListener("click", () => {
  document.querySelector(".header").classList.toggle("nav-open");
});

document.querySelectorAll("a:link").forEach((li) =>
  li.addEventListener("click", function (e) {
    e.preventDefault();

    const href = li.getAttribute("href");
    if (href === "#")
      window.scrollTo({
        top: "0",
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionId = document.querySelector(href);
      sectionId.scrollIntoView({
        behavior: "smooth",
      });
    }

    // Close mobile naviagtion
    if (li.classList.contains("main-nav-link"))
      document.querySelector(".header").classList.toggle("nav-open");
  })
);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// Smooth Scroll On Safari Browsers
//https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

// Sticky Nav
const header = document.querySelector(".header");
const hero = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    document.body.classList.remove("sticky");
    if (!ent.isIntersecting) document.body.classList.add("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(hero);
