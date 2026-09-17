/* =========================================
   PRELOADER
========================================= */

window.addEventListener("load", () => {

    const preloader =
        document.getElementById("preloader");

    setTimeout(() => {

        preloader.classList.add("hide");

    }, 500);

});


/* =========================================
   AOS
========================================= */

if (typeof AOS !== "undefined") {

    AOS.init({

        duration: 800,

        once: true,

        offset: 80,

        easing: "ease-out-cubic"

    });

}


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("open");

        const icon =
            menuBtn.querySelector("i");

        if (navLinks.classList.contains("open")) {

            icon.className = "bi bi-x-lg";

        } else {

            icon.className = "bi bi-list";

        }

    });


    document
        .querySelectorAll(".nav-link")
        .forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("open");

                const icon =
                    menuBtn.querySelector("i");

                icon.className = "bi bi-list";

            });

        });

}


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll("section[id]");

const navItems =
    document.querySelectorAll(".nav-link");

function updateActiveNav() {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            current =
                section.getAttribute("id");

        }

    });

    navItems.forEach(item => {

        item.classList.remove("active");

        if (
            item.getAttribute("href") ===
            `#${current}`
        ) {

            item.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveNav
);


/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

const navbarWrapper =
    document.querySelector(
        ".navbar-wrapper"
    );

window.addEventListener("scroll", () => {

    if (!navbarWrapper) return;

    if (window.scrollY > 50) {

        navbarWrapper.style.background =
            "rgba(5,5,7,0.92)";

    } else {

        navbarWrapper.style.background =
            "rgba(5,5,7,0.75)";

    }

});


/* =========================================
   THEME TOGGLE
========================================= */

const themeToggle =
    document.getElementById(
        "themeToggle"
    );

const savedTheme =
    localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {

    document.body.classList.add(
        "light-mode"
    );

}

function updateThemeIcon() {

    if (!themeToggle) return;

    const icon =
        themeToggle.querySelector("i");

    if (
        document.body.classList.contains(
            "light-mode"
        )
    ) {

        icon.className =
            "bi bi-sun";

    } else {

        icon.className =
            "bi bi-moon-stars";

    }

}

updateThemeIcon();

if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "light-mode"
            );

            const isLight =
                document.body.classList.contains(
                    "light-mode"
                );

            localStorage.setItem(
                "portfolio-theme",
                isLight ?
                "light" :
                "dark"
            );

            updateThemeIcon();

        }
    );

}


/* =========================================
   COUNTER ANIMATION
========================================= */

const counters =
    document.querySelectorAll(
        "[data-count]"
    );

let countersStarted = false;

function animateCounters() {

    if (countersStarted) return;

    const statsSection =
        document.querySelector(
            ".hero-stats"
        );

    if (!statsSection) return;

    const position =
        statsSection.getBoundingClientRect();

    if (
        position.top <
        window.innerHeight &&
        position.bottom > 0
    ) {

        countersStarted = true;

        counters.forEach(counter => {

            const target =
                parseInt(
                    counter.dataset.count
                );

            let current = 0;

            const increment =
                Math.max(
                    1,
                    Math.ceil(target / 30)
                );

            const timer =
                setInterval(() => {

                    current += increment;

                    if (current >= target) {

                        current = target;

                        clearInterval(timer);

                    }

                    counter.textContent =
                        current;

                }, 40);

        });

    }

}

window.addEventListener(
    "scroll",
    animateCounters
);

animateCounters();


/* =========================================
   PROJECT MODAL
========================================= */

const projectData = {

    agentflow: {

        label: "AI / AGENTIC SYSTEM",

        title: "AgentFlow",

        description: "An AI Engineering Assistant built with LangGraph and LangChain. The system routes queries across RAG, web search, MCP tools and direct LLM reasoning. It uses Gemini, ChromaDB, Tavily and FastAPI and is containerized with Docker and deployed on Render.",

        technologies: [
            "Python",
            "LangChain",
            "LangGraph",
            "RAG",
            "Gemini",
            "ChromaDB",
            "MCP",
            "Tavily",
            "FastAPI",
            "Docker",
            "Render"
        ],

        github: "https://github.com/kattavinithareddy/agentflow",

        demo: "https://agentflow-uwon.onrender.com/"

    },


    accessibility: {

        label: "WEB / ACCESSIBILITY",

        title: "Web Accessibility Analyzer",

        description: "A responsive React dashboard designed to analyze web accessibility across countries using automated rule-based checks. The project includes checks for color contrast, alternative text and keyboard navigation based on WCAG 2.1, with interactive visualizations for comparing accessibility results.",

        technologies: [
            "React.js",
            "JavaScript",
            "Python",
            "HTML5",
            "CSS3",
            "WCAG 2.1",
            "Data Visualization"
        ],

        github: "https://github.com/kattavinithareddy/Evaluating_Web_Accessibility_in_Countries_Included_in_the_Latin_America",

        demo: "#"

    },


    federated: {

        label: "MACHINE LEARNING / PRIVACY",

        title: "Personalized Federated Learning",

        description: "A privacy-oriented machine learning project exploring personalized federated learning for in-hospital mortality prediction using multi-center ICU data. The project focuses on decentralized learning and personalization while avoiding direct centralization of sensitive clinical data.",

        technologies: [
            "Python",
            "Machine Learning",
            "Federated Learning",
            "Healthcare AI",
            "Privacy-Preserving AI"
        ],

        github: "https://github.com/kattavinithareddy/Personalized-Federated-Learning-for-In-Hospital-Mortality-Prediction",

        demo: "#"

    }

};


const modal =
    document.getElementById(
        "projectModal"
    );

const modalClose =
    document.getElementById(
        "modalClose"
    );

const modalLabel =
    document.getElementById(
        "modalLabel"
    );

const modalTitle =
    document.getElementById(
        "modalTitle"
    );

const modalDescription =
    document.getElementById(
        "modalDescription"
    );

const modalTech =
    document.getElementById(
        "modalTech"
    );

const modalGithub =
    document.getElementById(
        "modalGithub"
    );

const modalDemo =
    document.getElementById(
        "modalDemo"
    );


document
    .querySelectorAll(".details-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const project =
                    button.dataset.project;

                const data =
                    projectData[project];

                if (!data) return;

                modalLabel.textContent =
                    data.label;

                modalTitle.textContent =
                    data.title;

                modalDescription.textContent =
                    data.description;

                modalTech.innerHTML = "";

                data.technologies
                    .forEach(tech => {

                        const tag =
                            document.createElement(
                                "span"
                            );

                        tag.textContent =
                            tech;

                        modalTech.appendChild(
                            tag
                        );

                    });

                modalGithub.href =
                    data.github;

                if (data.demo === "#") {

                    modalDemo.style.display =
                        "none";

                } else {

                    modalDemo.style.display =
                        "inline-flex";

                    modalDemo.href =
                        data.demo;

                }

                modal.classList.add(
                    "active"
                );

                document.body.style.overflow =
                    "hidden";

            }
        );

    });


function closeModal() {

    modal.classList.remove(
        "active"
    );

    document.body.style.overflow =
        "";

}

if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeModal
    );

}

if (modal) {

    modal.addEventListener(
        "click",
        event => {

            if (
                event.target === modal
            ) {

                closeModal();

            }

        }
    );

}

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeModal();

        }

    }
);


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById(
        "contactForm"
    );

const formStatus =
    document.getElementById(
        "formStatus"
    );

const submitBtn =
    document.getElementById(
        "submitBtn"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        async event => {

            event.preventDefault();

            const formAction =
                contactForm.getAttribute(
                    "action"
                );

            if (
                formAction.includes(
                    "YOUR_FORM_ID"
                )
            ) {

                formStatus.textContent =
                    "Please connect your Formspree form first.";

                formStatus.className =
                    "form-status error";

                return;

            }


            submitBtn.classList.add(
                "loading"
            );

            submitBtn.querySelector(
                    "span"
                ).textContent =
                "Sending...";


            try {

                const formData =
                    new FormData(
                        contactForm
                    );

                const response =
                    await fetch(
                        formAction, {
                            method: "POST",

                            body: formData,

                            headers: {
                                Accept: "application/json"
                            }
                        }
                    );


                if (response.ok) {

                    formStatus.textContent =
                        "Message sent successfully! I'll get back to you soon.";

                    formStatus.className =
                        "form-status success";

                    contactForm.reset();

                } else {

                    throw new Error(
                        "Submission failed"
                    );

                }

            } catch (error) {

                formStatus.textContent =
                    "Something went wrong. Please try again or email me directly.";

                formStatus.className =
                    "form-status error";

            }


            submitBtn.classList.remove(
                "loading"
            );

            submitBtn.querySelector(
                    "span"
                ).textContent =
                "Send Message";

        }
    );

}


/* =========================================
   BACK TO TOP
========================================= */

const backToTop =
    document.getElementById(
        "backToTop"
    );

window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 600
        ) {

            backToTop.classList.add(
                "show"
            );

        } else {

            backToTop.classList.remove(
                "show"
            );

        }

    }
);


if (backToTop) {

    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* =========================================
   CURRENT YEAR
========================================= */

const currentYear =
    document.getElementById(
        "currentYear"
    );

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =========================================
   IMAGE FALLBACK
========================================= */

const heroImage =
    document.querySelector(
        ".hero-image"
    );

if (heroImage) {

    heroImage.addEventListener(
        "error",
        () => {

            heroImage.style.display =
                "none";

            const wrapper =
                document.querySelector(
                    ".hero-image-wrapper"
                );

            if (wrapper) {

                wrapper.style.background =
                    "linear-gradient(145deg, #15111f, #08080c)";

            }

        }
    );

}