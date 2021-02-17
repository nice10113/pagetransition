import { TimelineLite, Power4 } from "gsap";

window.onload = () => {
  const navbar = document.querySelector(".navbar");
  const navbarToggler = document.querySelector(".navbar-toggler");
  var navToggled = false;
  const transition = document.querySelector(".transition");
  const tl = new TimelineLite();

  function navAnimation() {
    tl.from(".logo", {
      opacity: 0,
      ease: Power4.ease,
      delay: 0.5,
    }).staggerFrom(
      ".navbar ul li",
      1,
      {
        opacity: 0,
        delay: 0.5,
        ease: Power4.ease,
        pointerEvents: "none",
      },
      0.1
    );

    tl.to(".navbar .btn", 1, {
      opacity: 1,
      ease: Power4.ease,
      pointerEvents: "all",
    });

    tl.from(".hero__content", 1, {
      opacity: 0,
      pointerEvents: "all",
      ease: Power4.ease,
    });
  }

  function pageTransition() {
    const anchors = document.querySelectorAll("a");

    setTimeout(() => {
      transition.classList.remove("is-active");
      navAnimation();
    }, 1000);

    for (let i = 0; i < anchors.length; i++) {
      var anchor = anchors[i];

      anchor.addEventListener("click", (e) => {
        e.preventDefault();

        let target = e.target.href;

        transition.classList.add("is-active");

        setTimeout(() => {
          window.location.href = target;
        }, 1000);
      });
    }
  }

  function toggleNavbar() {
    navbarToggler.addEventListener("click", () => {
      if (!navToggled) {
        navbarToggler.classList.add("navToggle");
        navbar.classList.add("activeNav");
        navToggled = true;
      } else {
        navbarToggler.classList.remove("navToggle");
        navbar.classList.remove("activeNav");
        navToggled = false;
      }
    });
  }

  pageTransition();
  toggleNavbar();
};
