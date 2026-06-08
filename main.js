const slides = document.querySelectorAll(".feature-slider img");
const dots = document.querySelectorAll(".slider-dots span");

const prevBtn = document.querySelector(".slider-arrow-left");
const nextBtn = document.querySelector(".slider-arrow-right");

let currentSlide = 0;

function showSlide(index) {

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

function nextSlide() {
  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  showSlide(currentSlide);
}

if (nextBtn && prevBtn) {
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  setInterval(nextSlide, 5000);
}

const stickyHeader = document.querySelector('.sticky-header');

if (stickyHeader) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      stickyHeader.classList.add('show');
    } else {
      stickyHeader.classList.remove('show');
    }
  });
}

const spots = {
  1: {
    number: "1",
    image: "assets/images/deep_turbo_tauchspots.jpg",
    title: "DEEP TURBO",
    description:
      "Wer schon viel Erfahrung hat, wird diesen Tauchplatz auf 23 Metern Tiefe lieben. Hier trefft ihr Große Zackenbarsche, Muränen und Adlerrochen, außerdem versprechen schwache, aber in verschiedene Richtungen wirbelnde Strömungen einen abenteuerreichen Tauchgang."
  },

  2: {
    number: "2",
    image: "assets/images/coral-garden-active.jpg",
    title: "CORAL FAN GARDEN",
    description:
      "Erlebt hier die unglaubliche Vielfalt der Unterwasserwelt, und das bei temporeicher Strömung!"
  },

  3: {
    number: "3",
    image: "assets/images/sharkpoint-active.jpg",
    title: "SHARK POINT",
    description:
      "Treppenartig führt ein stufenförmiger Kamm immer tiefer, bis ihr auf dem Boden liegende Weißspitzen-Riffhaie oder herumschwimmende Schwarzspitzen-Riffhaie antrefft."
  },

  4: {
    number: "4",
    image: "assets/images/mantapoint-active.jpg",
    title: "MANTA POINT",
    description:
      "Dieser Korallengarten ist einer der gesündesten der ganzen Umgebung. Hier könnt ihr zum Beispiel Tintenfische, Orang-Utan-Krabben und Weiß- und Schwarzspitzen-Riffhaie beobachten."
   },

  5: {
    number: "5",
    image: "assets/images/turtle-heaven-active.jpg",
    title: "TURTLE HEAVEN",
    description:
      "Bettys Lieblingsspot, nach dem sie ihre Tauchschule benannt hat. Turtle heaven besteht aus einem Riff aus flachen Korallen und einem hervortretenden Felsen. In der Regel ist hier alles voll mit wunderschönen Wasserschildkröten."
  }
};

const activeNumber = document.getElementById("active-number");
const activeImage = document.getElementById("active-image");
const activeTitle = document.getElementById("active-title");
const activeDescription = document.getElementById("active-description");

const pins = document.querySelectorAll(".pin");
const thumbnails = document.querySelectorAll(".thumbnail-card");

function updateSpot(id) {
  const spot = spots[id];

  activeNumber.textContent = spot.number;
  activeImage.src = spot.image;
  activeTitle.textContent = spot.title;
  activeDescription.textContent = spot.description;

  thumbnails.forEach(card => {
    card.classList.remove("active");
  });

  document
    .querySelector(`.thumbnail-card[data-spot="${id}"]`)
    .classList.add("active");

  pins.forEach(pin => {
    const pinNumber = pin.dataset.spot;

    if (pinNumber === id) {
      pin.src = `assets/icons/pin-${pinNumber}.svg`;
    } else {
      pin.src = `assets/icons/pin-${pinNumber}-black.svg`;
    }
  });
}

pins.forEach(pin => {
  pin.addEventListener("click", () => {
    updateSpot(pin.dataset.spot);
  });
});

thumbnails.forEach(card => {
  card.addEventListener("click", () => {
    updateSpot(card.dataset.spot);
  });
});