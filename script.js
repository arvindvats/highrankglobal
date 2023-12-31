const navLinks = document.querySelectorAll(".nav-link");
const logo = document.querySelector("#logo");
const logoImg = document.querySelector(".logo-img");
const headTopWrapper = document.querySelector(".head-top-wrapper");
const mobileBreakpoint = 876;

// Add click event listener to each navigation link
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    // Remove active class from all links
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });

    // Add active class to the clicked link
    link.classList.add("active");

    // Get the target section's ID from the link's href attribute
    const targetId = link.getAttribute("href").substring(1);

    // Scroll to the target section
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

// Testimonials Slider owl courosol
// script file
$(".testi-container").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fa-solid fa-arrow-left'></i>",
    "<i class='fa-solid fa-arrow-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    800: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
});

// JS for accordian - to open and close accordian as per click
const ourItemDiv = document.getElementsByClassName("item-faq");
const openIcon = document.getElementsByClassName("iconOpen");
const closeIcon = document.getElementsByClassName("iconClose");
const numberIcon = document.getElementsByClassName("number");

ourItemDiv[1].classList.toggle("active");
ourItemDiv[1].classList.add("active-bg");
numberIcon[1].classList.add("active-bg-icon");

for (let i = 0; i < ourItemDiv.length; i++) {
  closeIcon[i].style.display = "none";

  ourItemDiv[i].addEventListener("click", () => {
    const result = ourItemDiv[i].classList.toggle("active");

    if (result) {
      openIcon[i].style.display = "none";
      closeIcon[i].style.display = "block";
      ourItemDiv[i].classList.add("active-bg");
      numberIcon[i].classList.add("active-bg-icon");

      for (let j = 0; j < ourItemDiv.length; j++) {
        if (j === i) {
          continue;
        } else {
          ourItemDiv[j].classList.remove("active");
          ourItemDiv[j].classList.remove("active-bg");
          numberIcon[j].classList.remove("active-bg-icon");
          closeIcon[j].style.display = "none";
          openIcon[j].style.display = "block";
        }
      }
    } else {
      openIcon[i].style.display = "block";
      closeIcon[i].style.display = "none";
      ourItemDiv[i].classList.remove("active-bg");
      numberIcon[i].classList.remove("active-bg-icon");
    }
  });
}

// Scroll to top button js
// Getting the back to top element
const backToTop = document.getElementById("backToTop");

// Function to show/hide the back to top button
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
}

// Adding scroll event listener
window.onscroll = function () {
  scrollFunction();
};

// Optional: Smooth scroll for the back to top link
backToTop.addEventListener("click", function (event) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});