const logoAnimation = document.querySelectorAll(".logoAnimation");
const slideInRight = document.querySelectorAll(".SlideRight");
const slideInLeft = document.querySelectorAll(".SlideLeft");
const FooterSlideLeft = document.querySelectorAll(".FooterSlideLeft");

const FooterSlideLeftObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("FooterSlideInStaggered");
    }
  });
});

FooterSlideLeft.forEach((FooterSlideLeft) => {
  FooterSlideLeftObserver.observe(FooterSlideLeft);
});

const slideInRightObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slideInRight");
    }
  });
});

slideInRight.forEach((slideInRight) => {
  slideInRightObserver.observe(slideInRight);
});

const slideInLeftObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("SlideLeft");
      entry.target.classList.add("slideInLeft");
    }
  });
});

slideInLeft.forEach((slideInLeft) => {
  slideInLeftObserver.observe(slideInLeft);
});

const logoObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slideInDown");
    }
  });
});

logoAnimation.forEach((onLoadAnimation) => {
  logoObserver.observe(onLoadAnimation);
});

addEventListener("click", (e) => {
  if (e.target.classList.contains("NavItem")) {
    const prevSelected = document.querySelector(".NavItem_Selected");
    if (prevSelected) {
      prevSelected.classList.remove("NavItem_Selected");
    }
    e.target.classList.add("NavItem_Selected");
  }
});

addEventListener("click", (e) => {
  if (e.target.id === "CircleScrollDown") {
    document
      .querySelector("#Information")
      .scrollIntoView({ behavior: "smooth" });
  }
});
