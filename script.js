// ===== Scroll Reveal (Sections + Projects Unified) =====
const elements = document.querySelectorAll("section, .project");

window.addEventListener("scroll", () => {
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            el.classList.add("show");
        }
    });
});


// ===== Typing Effect (Advanced Looping) =====
const texts = [
    "Business Analyst",
    "Data Scientist",
    "Web Developer"
];

let i = 0;      // text index
let j = 0;      // character index
let isDeleting = false;

function typeEffect() {
    const current = texts[i];
    const typingElement = document.getElementById("typing");

    if (!typingElement) return;

    if (!isDeleting) {
        typingElement.textContent = current.substring(0, j++);
    } else {
        typingElement.textContent = current.substring(0, j--);
    }

    if (j === current.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
        return;
    }

    if (j === 0) {
        isDeleting = false;
        i = (i + 1) % texts.length;
    }

    setTimeout(typeEffect, isDeleting ? 40 : 80);

}

typeEffect();


// ===== Dark Mode Toggle =====
const toggle = document.getElementById("darkModeToggle");

if (toggle) {
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        // Save preference
        localStorage.setItem("theme",
            document.body.classList.contains("dark-mode") ? "light" : "dark"
        );
    });
}

// Load saved theme
window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("dark-mode");
    }
});


// ===== Smooth Navbar Highlight (Active Link) =====
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
    let current = "";

    document.querySelectorAll("section").forEach(section => {
        const sectionTop = section.offsetTop;

        if (scrollY >= sectionTop - 100) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});


// ===== Smooth Page Load Animation =====
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});


particlesJS("particles-js", {
    particles: {
        number: { value: 80 },
        size: { value: 3 },
        color: { value: "#38bdf8" },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#38bdf8",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2
        }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "repulse" }
        }
    }
});
