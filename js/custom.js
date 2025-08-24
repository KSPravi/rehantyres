jQuery(".flexslider").flexslider({
  animation: "fade",
  controlNav: false,
  directionNav: true,
  touch: true,
  drag: true,
  slideshow: true,
  prevText: "",
  nextText: "",
  slideshowSpeed: 5000,
  animationSpeed: 1000,
});
$(".service-carousel").owlCarousel({
  loop: true,
  margin: 30,
  dots: false,
  nav: true,
  items: 3,
  autoplay: true,
  autoplayTimeout: 4000,
  smartSpeed: 2500,
  navText: ["", ""],
});
$(window).on("load", function () {
  jQuery(".preloader").fadeOut("slow", function () {});
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".main-menu ul a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Optional: Smooth scroll for older browsers
document.querySelectorAll(".main-menu ul a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
