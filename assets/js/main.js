/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')


if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

navLink.forEach((n) => n.addEventListener("click", () => {
    navMenu.classList.remove('show-menu')
}));
/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const header = document.getElementById("header");
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 100) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);
/*==================== SWIPER DISCOVER ====================*/
const swiper = new Swiper('.discover__container', {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        // rotate: 50,
        rotate: 0,
    }
})
/*==================== VIDEO ====================*/
const videoFile = document.getElementById('video-file');
const videoButton = document.getElementById('video-button');
const videoIcon = document.getElementById('video-icon');
function playPause() {
    if (videoFile.paused) {
        videoFile.play()
        videoIcon.classList.add('ri-pause-line');
        videoIcon.classList.remove('ri-play-line')
    } else {
        videoFile.pause()
        videoIcon.classList.remove('ri-pause-line');
        videoIcon.classList.add('ri-play-line')
    }

}
videoButton.addEventListener('click', playPause)
function finalVideo() {
    videoIcon.classList.remove('ri-pause-line');
    videoIcon.classList.add('ri-play-line')
}
videoFile.addEventListener('endef', finalVideo)
/*====================scroll ====================*/
function scrollTop() {
    const scrollTop = document.getElementById("scroll-up");
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 200) scrollTop.classList.add("show-scroll");
    else scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);
/*==================== active link scroll ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        } else {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }
    });
}
window.addEventListener("scroll", scrollActive);


/*==================== dark-theme ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
    );
    themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
        iconTheme
    );
}

themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});
/*==================== ScrollReveal ====================*/

const sr = ScrollReveal({

    distance: "60px",
    duration: 2000,
    reset: true,
});
sr.reveal(
    `.home__data,.home__social-link,.home__info,
    .discover__container,.experience__data,.experience__overlay,
    .place__card,.sponsor__content,.footer__data,.footer__rights`,
    {
        interval: 100,
        origin: "top",
    }
);
sr.reveal(
    `.about__data,.video__description,.subscribe__description`,
    {
        interval: 100,
        origin: "left",
    }
);
sr.reveal(
    `.about__img-overlay,.video__content,.subscribe__form`,
    {
        interval: 100,
        origin: "right",
    }
);