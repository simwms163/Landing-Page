const navMotion = () => {
  const naviLinkContainer = document.querySelector("#navbar__list");
  const sections = document.querySelectorAll("section");

  // customize the section margin
  naviLinkContainer.style.display = "flex";
  naviLinkContainer.style.flexDirection = "row";
  naviLinkContainer.style.gap = "5px";
  naviLinkContainer.style.margin = "10px";
};
const sections = document.querySelectorAll("section");
for (const section of sections) {
  section.style.background = "purple";
}

sections.forEach((section) => {
  let sectionId = section.id;
  const dataNav = section.getAttribute("data-nav");

  // link section and data using innerHTML
  const naviLinkHTML = `<a class="menu__link" href="#${sectionId}">${dataNav}</a>`;
  naviLinkContainer.innerHTML += naviLinkHTML;
});

navMotion();

// Add class 'active' to section when near top of viewport

const addActiveClass = () => {
  const sections = document.querySelectorAll("section");
  const naviTools = document.querySelectorAll(".menu__link");
};
let activeSectionIndex = -1;

sections.forEach((section, index) => {
  const viewPortRect = section.getBoundingClientRect();
  const threshold = 100;

  if (viewPortRect.top <= threshold && viewPortRect.bottom >= threshold) {
    activeSectionIndex = index;
  }
});

// this is for the DOM color to change when moving to each sction
sections.forEach((section, index) => {
  if (index === activeSectionIndex) {
    section.classList.add("your-active-class");
    section.style.backgroundColor = "orange";
  } else {
    section.classList.remove("your-active-class");
    section.style.backgroundColor = "";
  }
});

// Added to manage the active state of the navagtion links.
naviTools.forEach((naviLink, index) => {
  if (index === activeSectionIndex) {
    naviLink.classList.add("your-active-class");
  } else {
    naviLink.classList.remove("your-active-class");
  }
});

// This is to add the event listener for the window object scroll event
window.addEventListener("scroll", addActiveClass);

/// Scroll to anchor ID using scrollTO event

document.querySelectorAll(".menu__link").forEach((naviTools) => {
  naviTools.addEventListener("click", function (event) {
    // prevent the default behavior of the event
    event.preventDefault();
    document
      .getElementById(this.getAttribute("href").substring(1))
      .scrollIntoView({ behavior: "smooth" });
  });
});
