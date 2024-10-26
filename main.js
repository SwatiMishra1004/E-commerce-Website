const scrollReveal = ScrollReveal();
const menubtn = document.getElementById("menu-btn");
const navlinks = document.getElementById("nav-links");
const menubtnicon = menubtn.querySelector("i");

menubtn.addEventListener("click" , (e) => {
  navlinks.classList.toggle("open");
  
  const isopen = navlinks.classList.contains("open");
  menubtnicon.setAttribute("class" , isopen ? "ri-close-line" : "ri-menu-line");
});

navlinks.addEventListener("click" , (e)  => {
    navlinks.classList.remove("open");
    menubtnicon.setAttribute("class" , "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px", 
  duration: 1000,

};

scrollReveal.reveal(".header_image img", {
  ...scrollRevealOption,
  origin: "right",
});

scrollReveal.reveal(".header_content h1", {
  ...scrollRevealOption,
  delay: 500,
});

scrollReveal.reveal(".header_content p", {
  ...scrollRevealOption,
  delay: 1000,
});

scrollReveal.reveal(".header_content .btns", {
  ...scrollRevealOption,
  delay: 1500,
});

const banner = document.querySelector(".banner_container");

const bannerContent = Array.from(banner.children);

bannerContent.forEach(item => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  banner.appendChild(duplicateNode);
});

scrollReveal.reveal(".arrival_card", {
  ...scrollRevealOption,
  interval: 500,
});

scrollReveal.reveal(".sale_image img", {
  ...scrollRevealOption,
  origin: "left",
});

scrollReveal.reveal(".sale_content h2", {
  ...scrollRevealOption,
  delay: 500,
});

scrollReveal.reveal(".sale_content p", {
  ...scrollRevealOption,
  delay: 1000,
});

scrollReveal.reveal(".sale_content h4", {
  ...scrollRevealOption,
  delay: 1000,
});

scrollReveal.reveal(".sale_content .btn", {
  ...scrollRevealOption,
  delay: 1500,
});

scrollReveal.reveal(".favourite_card", {
  ...scrollRevealOption,
  interval: 500,
});
