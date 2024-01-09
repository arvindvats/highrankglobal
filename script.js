const navLinks = document.querySelectorAll(".nav-link");
const logo = document.querySelector("#logo");
const logoImg = document.querySelector(".logo-img");
const headTopWrapper = document.querySelector(".head-top-wrapper");
const mobileBreakpoint = 876;

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

ourItemDiv[0].classList.toggle("active");
ourItemDiv[0].classList.add("active-bg");
numberIcon[0].classList.add("active-bg-icon");

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

// Navbar sticking to top hardcoded in JavaScript since CSS solution is having issues
// JavaScript to make the navbar sticky on scroll
// new
window.addEventListener("scroll", function () {
  // Only apply the sticky navbar in screens with max-width of 992px
  if (window.innerWidth <= 992) {
    var navbar = document.querySelector("header"); // Change 'header' to your navbar's class or ID
    var stickyClass = "sticky-navbar"; // This is the class you'll add for the sticky effect

    if (window.pageYOffset > 350) {
      navbar.classList.add(stickyClass);
    } else {
      navbar.classList.remove(stickyClass);
    }
  }
});

// Navbar hamburger closes after reach that nav link section
document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll(".navbar .nav-link"); // Select all nav links
  var navbarToggler = document.querySelector(".navbar-toggler"); // Select the navbar toggle button (hamburger menu)

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.innerWidth < 992) {
        // You can adjust the width as needed for your responsive breakpoint
        navbarToggler.click(); // Simulate a click on the navbar toggler
      }
    });
  });
});

// navbar gradient on scroll from trasnaprent

// window.addEventListener("scroll", () => {
//   const navbar = document.getElementById("navbar");
//   if (window.scrollY > 50) {
//     navbar.classList.add("navbar-scrolled");
//   } else {
//     navbar.classList.remove("navbar-scrolled");
//   }
// });

// window.addEventListener("scroll", () => {
//   const navbar = document.getElementById("navbar");
//   if (window.scrollY > 50) {
//     navbar.classList.add("navbar-scrolled");
//   } else {
//     navbar.classList.remove("navbar-scrolled");
//   }
// });

// window.addEventListener("scroll", () => {
//   const navbar = document.getElementById("navbar");
//   if (window.scrollY > 460) {
//     navbar.classList.add("navbar-scrolled");
//   } else {
//     navbar.classList.remove("navbar-scrolled");
//   }
// });

window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 80) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});
