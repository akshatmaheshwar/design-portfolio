document.addEventListener("DOMContentLoaded", () => {
  const texts = ["a programmer.", "a designer.", "a student."];
  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";
  const dynamicText = document.getElementById("dynamic-text");
  const typingEffect = document.querySelector(".typing-effect");

  function type() {
    if (count === texts.length) {
      count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    dynamicText.textContent = letter;

    if (letter.length === currentText.length) {
      setTimeout(() => {
        backspace();
      }, 2000);
    } else {
      setTimeout(type, 150);
    }
  }

  function backspace() {
    letter = currentText.slice(0, --index);
    dynamicText.textContent = letter;

    if (letter.length === 0) {
      count++;
      index = 0;
      setTimeout(type, 500);
    } else {
      setTimeout(backspace, 100);
    }
  }

  setTimeout(() => {
    typingEffect.style.visibility = "visible";
    type();
  }, 6000);

  const downArrow = document.querySelector(".down-arrow");
  downArrow.addEventListener("click", () => {
    document.getElementById("about-me").scrollIntoView({ behavior: "smooth" });
  });
});

window.onscroll = function () {
  const header = document.querySelector(".transparent-header");
  const introductionSection = document.querySelector(".content");

  const introHeight = introductionSection.offsetHeight - 1;

  if (window.scrollY >= introHeight) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
};

function highlightCurrentSection() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  let isFirstSectionVisible = true;

  sections.forEach((section, index) => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionHeight = section.clientHeight;

    if (
      sectionTop <= window.innerHeight / 2 &&
      sectionTop + sectionHeight > window.innerHeight / 2
    ) {
      isFirstSectionVisible = false;
      navLinks.forEach((link) => link.classList.remove("active"));
      navLinks[index].classList.add("active");
    }
  });

  if (isFirstSectionVisible) {
    navLinks.forEach((link) => link.classList.remove("active"));
  }
}

document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

window.addEventListener("scroll", highlightCurrentSection);

imagedisplay(".gallery-image");
imagedisplay(".profile-image");

function imagedisplay(aabc) {
  var images = document.querySelectorAll(aabc);

  const modal = document.getElementById("galleryModal");
  const modalImage = document.getElementById("modalImage");
  const closeModal = document.querySelector(".close");

  images.forEach((image) => {
    image.addEventListener("click", function () {
      const src = this.src;
      modalImage.src = src;
      modal.style.display = "block";
    });
  });

  closeModal.onclick = function () {
    modal.style.display = "none";
  };

  modal.onclick = function (event) {
    if (event.target != modal) {
      modal.style.display = "none";
    }
  };
}

let currentIndex = 0;
const timages = document.querySelectorAll(".carousel-images img");
const dotsContainer = document.querySelector(".carousel-dots");

function createDots() {
  timages.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.dataset.index = index;
    dot.addEventListener("click", () => {
      moveToSlide(index);
    });
    dotsContainer.appendChild(dot);
  });
}

function showSlide(index) {
  timages.forEach((img, i) => {
    img.classList.remove("active");
    if (i === index) {
      img.classList.add("active");
    }
  });

  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    dot.classList.remove("active-dot");
    if (i === index) {
      dot.classList.add("active-dot");
    }
  });
}

function moveToSlide(index) {
  currentIndex = index;
  showSlide(currentIndex);
}

function moveSlide(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = timages.length - 1;
  } else if (currentIndex >= timages.length) {
    currentIndex = 0;
  }

  showSlide(currentIndex);
}

const intervalTime = 3000;
let intervalId;

function startCarousel() {
  intervalId = setInterval(() => {
    moveSlide(1);
  }, intervalTime);
}

const carousel = document.querySelector(".carousel");

carousel.addEventListener("mouseenter", () => {
  clearInterval(intervalId);
});

carousel.addEventListener("mouseleave", () => {
  startCarousel();
});

function initCarousel() {
  createDots();
  showSlide(currentIndex);
  startCarousel();
}

initCarousel();

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

function toggleScrollToTopBtn() {
  const secondSection = document.querySelectorAll("section")[0];

  if (window.scrollY > secondSection.offsetTop - 1) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.addEventListener("scroll", toggleScrollToTopBtn);

scrollToTopBtn.addEventListener("click", scrollToTop);
