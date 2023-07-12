const lPages = document.querySelector(".projects .landing-pages");
const childrenOfLPages = [...lPages.children];

childrenOfLPages.forEach(child => {
    child.setAttribute("title", "Click To See The Whole Landing Page");
});

// console.log()

// observer of landing pages
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("opa", entry.isIntersecting);
        if(entry.isIntersecting) observer.unobserve(entry.target);
    });
});

childrenOfLPages.forEach(child => {
    observer.observe(child)
});

// services
const servicesChildren = document.querySelector(".parent .container .services");
const aboutChildren = document.querySelector(".about");

const services = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("opa", entry.isIntersecting);
        if(entry.isIntersecting) services.unobserve(entry.target);
    });
}, {
    threshold: .5,
});

[...servicesChildren.children, ...aboutChildren.children].forEach((child => {
    services.observe(child);
}));



// button bar
const btn = document.querySelector(".parent .container nav .fa-bars");
btn.addEventListener("click", () => {
    btn.classList.toggle("active");
});

// bar remove
document.querySelectorAll(".parent .container nav ul li a").forEach(a => {
    a.addEventListener("click", () => {
        btn.classList.remove("active");
    })
});




// landing pages
const background = lPages.querySelector(".background");

childrenOfLPages.forEach((child) => {

    if(child.classList.contains("background")) return;
    else {
        child.addEventListener("click", (ev) => {
            window.location.href='#landingPages';
            document.body.style.overflow = "hidden";


            background.classList.add("active");
            let noded = ev.target.parentElement.cloneNode(true);
            if(window.innerWidth >= 767) noded.style.cssText = `width: 30%; height: 800px;overflow-y: scroll;transform: scale(1);z-index: 3; cursor: default;height: 99vh;`;
            else noded.style.cssText = "width: 80%; height: 800px;overflow-y: scroll;transform: scale(1);z-index: 3; cursor: default;height: 99vh;";
            noded.setAttribute("title", "Landing Page");
            background.appendChild(noded);
        });
    }
});

const close = background.querySelector(".fa-xmark");
let deletChilds = () => {
    [...background.children].forEach(child => {
        if(child.tagName === "DIV") child.remove();
    });
    background.classList.remove("active");
}
close.addEventListener("click", deletChilds);
close.parentElement.addEventListener("click", (ev) => {
    if (!ev.target.parentElement.classList.contains("landing")) deletChilds();

    document.body.style.overflowY = "scroll";
});

const buttonUp = document.querySelector("button.up");
window.onscroll = () => {
    if(window.scrollY >= 1000) buttonUp.style.display = "block";
    else buttonUp.style.display = "none";
}

buttonUp.onclick = () => {
    window.scrollTo({
        top:0,
        behavior: "smooth",
    });;
}

