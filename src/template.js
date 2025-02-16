import sheet from "./style.css";
import displayHome from "./home.js"
import displayMenu from "./menu.js"
import displayContact from "./contact.js"

function createHeaderMarkup() {
    const title = document.createElement("span");
    title.classList = ["restaurant-title"];
    const homeLink = document.createElement("a");
    homeLink.href = "#";
    homeLink.textContent = "Joe's Pizza";
    title.appendChild(homeLink);

    const navUl = document.createElement("ul");
    navUl.appendChild(createNavItem("Home", () => displayHome()));
    navUl.appendChild(createNavItem("Menu", () => displayMenu()));
    navUl.appendChild(createNavItem("Contact", () => displayContact()));
    const nav = document.createElement("nav");
    nav.appendChild(navUl);

    const header = document.createElement("header");
    header.appendChild(title);
    header.appendChild(nav);

    return header;
}

function createContentMarkup() {
    const content = document.createElement("div");
    content.id = "content";

    return content;
}

function createFooterMarkup() {
    const footerAddress = createFooterContentSection("Address", "Joe's Pizza\n7 Carmine Street\nNew York, NY 10014");
    const footerHours = createFooterContentSection("Hours", "Sun to Thu 10:00 AM to 03:00 AM\nFri to Sat 10:00 AM to 04:00 AM");
    const footerContact = createFooterContentSection("Contact", "561-555-0189\njoes@pizza.com");
    const footerContent = document.createElement("div");
    footerContent.classList = ["footer-content"];
    footerContent.appendChild(footerAddress);
    footerContent.appendChild(footerHours);
    footerContent.appendChild(footerContact);

    const footerLegals = document.createElement("div");
    footerLegals.classList = ["footer-legals"];
    const freepikLink = document.createElement("a");
    freepikLink.textContent = "Image by freepik";
    freepikLink.href = 
    "https://www.freepik.com/free-photo/top-view-delicious-pizza-wooden-table_9772390.htm\
     #fromView=search&page=1&position=7&uuid=87afdb5d-7e7f-47f2-9ca0-94ccf4abb371&query=Pizza";
     footerLegals.appendChild(freepikLink);

    const footer = document.createElement("footer");
    footer.appendChild(footerContent);
    footer.appendChild(footerLegals);
    return footer;
}

function createFooterContentSection(headingText, sectionText) {
    const heading = document.createElement("h3");
    heading.textContent = headingText;
    const textP = document.createElement("p");
    textP.textContent = sectionText;

    const footerSection = document.createElement("div");
    footerSection.appendChild(heading);
    footerSection.appendChild(textP);

    return footerSection;
}

function createNavItem(text, navCallback) {
    const li = document.createElement("li");
    li.classList = ["header-nav-item"];

    const button = document.createElement("button");
    button.attributes["type"] = "button";
    button.textContent = text;
    button.addEventListener("click", navCallback);

    li.appendChild(button);

    return li;
}

function buildWebsite() {
    const header = createHeaderMarkup();
    document.body.appendChild(header);
    const content = createContentMarkup();
    document.body.appendChild(content);
    const footer = createFooterMarkup();
    document.body.appendChild(footer);

    displayMenu();
}

export default buildWebsite;