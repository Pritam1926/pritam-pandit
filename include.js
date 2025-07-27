// include.js

function loadHTML(selector, file) {
  fetch(file)
    .then(res => {
      if (!res.ok) throw new Error(`Failed to fetch ${file}`);
      return res.text();
    })
    .then(data => {
      document.querySelector(selector).innerHTML = data;
    })
    .catch(err => console.error(err));
}

document.addEventListener("DOMContentLoaded", () => {
  loadHTML("#include-header", "header.html");
  loadHTML("#include-footer", "footer.html");
});


// Get current page file name from URL

document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("\\").pop(); // handles Windows path
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(link => {
    const linkHref = link.getAttribute("href");

    // special case for home page
    if ((currentPage === "" || currentPage === "index.html") && linkHref === "index.html") {
      link.classList.add("active");
    } else if (linkHref === currentPage) {
      link.classList.add("active");
    }
  });
});


const roles = ["BCA Graduate", "Web Developer", "Data Enthusiast", "Mentor"];
let index = 0, charIndex = 0;
const typedRole = document.getElementById("typed-role");

function typeRole() {
  if (charIndex < roles[index].length) {
    typedRole.textContent += roles[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, 100);
  } else {
    setTimeout(() => {
      typedRole.textContent = "";
      charIndex = 0;
      index = (index + 1) % roles.length;
      typeRole();
    }, 2000);
  }
}

document.addEventListener("DOMContentLoaded", typeRole);

// achievement tab
  function showTab(tabId) {
      const tabs = document.querySelectorAll('.tab-content');
      const buttons = document.querySelectorAll('.tab-button');

      tabs.forEach(tab => {
        tab.classList.remove('active');
      });
      buttons.forEach(btn => {
        btn.classList.remove('active');
      });

      document.getElementById(tabId).classList.add('active');
      event.target.classList.add('active');
    }

    // testimology
const carousel = document.getElementById("testimonialCarousel");

        function scrollRight() {
            if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 10) {
                carousel.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                carousel.scrollBy({ left: 300, behavior: 'smooth' });
            }
        }

        function scrollLeft() {
            if (carousel.scrollLeft <= 0) {
                carousel.scrollTo({ left: carousel.scrollWidth, behavior: 'smooth' });
            } else {
                carousel.scrollBy({ left: -300, behavior: 'smooth' });
            }
        }

        // Optional: Auto-scroll every 6 seconds
        setInterval(scrollRight, 4000);


// sidebar toggle
    function toggleSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('sidebar-show');
    }

