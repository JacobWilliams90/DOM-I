const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let logo2 = document.getElementById("cta-img");
logo2.setAttribute('src', siteContent["cta"]["img-src"])

let logo3 = document.getElementById("middle-img");
logo3.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let navlinks = document.getElementsByTagName("a");

navlinks[0].textContent = (siteContent["nav"]["nav-item-1"]);
navlinks[1].textContent = (siteContent["nav"]["nav-item-2"]);
navlinks[2].textContent = (siteContent["nav"]["nav-item-3"]);
navlinks[3].textContent = (siteContent["nav"]["nav-item-4"]);
navlinks[4].textContent = (siteContent["nav"]["nav-item-5"]);
navlinks[5].textContent = (siteContent["nav"]["nav-item-6"]);

let ctah1 = document.querySelectorAll("h1");
ctah1[0].textContent = (siteContent["cta"]["h1"]);

let btn = document.querySelector("button");
btn.textContent = (siteContent["cta"]["button"]);

let txt = document.querySelectorAll("h4");
let para = document.querySelectorAll("p")

txt[0].textContent = (siteContent["main-content"]["features-h4"]);
para[0].textContent = (siteContent["main-content"]["features-content"]);
txt[1].textContent = (siteContent["main-content"]["about-h4"]);
para[1].textContent = (siteContent["main-content"]["about-content"]);
txt[2].textContent = (siteContent["main-content"]["services-h4"]);
para[2].textContent = (siteContent["main-content"]["services-content"]);
txt[3].textContent = (siteContent["main-content"]["product-h4"]);
para[3].textContent = (siteContent["main-content"]["product-content"]);
txt[4].textContent = (siteContent["main-content"]["vision-h4"]);
para[4].textContent = (siteContent["main-content"]["vision-content"]);

txt[5].textContent = (siteContent["contact"]["contact-h4"]);
para[5].textContent = (siteContent["contact"]["address"]);
para[6].textContent = (siteContent["contact"]["phone"]);
para[7].textContent = (siteContent["contact"]["email"]);

para[8].textContent = (siteContent["footer"]["copyright"]);

for (var i = 0; i < navlinks.length; i++) {
	navlinks[i].style.color = 'green';
};


let append = document.createElement('a');
let linkText = document.createTextNode("Take Me Away");
append.appendChild(linkText);
append.href = "#";

let prepend = document.createElement('a');
let linkText2 = document.createTextNode("Home");
prepend.appendChild(linkText2);
prepend.href = "#";


