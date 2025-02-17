import sheet from "./style.css";
import displayHome from "./home.js"
import displayMenu from "./menu.js"
import displayContact from "./contact.js"
import {createNavItem, getNavItem, setSelectedNavItem} from "./navSelection.js";

function createHeaderMarkup() {
    const title = document.createElement("span");
    title.classList = ["restaurant-title"];
    const homeLink = document.createElement("a");
    homeLink.href = "#";
    homeLink.textContent = "Joe's Pizza";
    title.appendChild(homeLink);

    const navUl = document.createElement("ul");
    const homeNavItem = createNavItem("Home", "nav-home", () => displayHome());
    navUl.appendChild(homeNavItem);

    const menuNavItem = createNavItem("Menu", "nav-menu", () => displayMenu());
    navUl.appendChild(menuNavItem);

    const contactNavItem = createNavItem("Contact", "nav-contact", () => displayContact());
    navUl.appendChild(contactNavItem);

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

     const freepik1 = createImageSourceLink("Image by freepik", "https://www.freepik.com/free-photo/top-view-delicious-pizza-wooden-table_9772390.htm\
     #fromView=search&page=1&position=7&uuid=87afdb5d-7e7f-47f2-9ca0-94ccf4abb371&query=Pizza");
     footerLegals.appendChild(freepik1);


     const freepik2 = createImageSourceLink("Image by freepik", "https://www.freepik.com/free-psd/top-view-delicious-pizza_370860293.htm\
     #fromView=search&page=1&position=27&uuid=b001b61e-bb13-4a58-9fc5-3d2a9d8d79e6&query=pizza");
     footerLegals.appendChild(freepik2);

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


function createImageSourceLink(text, href) {
    const anchor = document.createElement("a");
    anchor.textContent = text;
    anchor.href = href;

    return anchor;
}

function buildWebsite() {
    const header = createHeaderMarkup();
    document.body.appendChild(header);
    const content = createContentMarkup();
    document.body.appendChild(content);
    const footer = createFooterMarkup();
    document.body.appendChild(footer);

    displayHome();
    const homeNavItem = getNavItem("nav-home");
    if(homeNavItem) {
        setSelectedNavItem(homeNavItem);
    }
}

export default buildWebsite;