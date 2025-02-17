import { View, createSectionMarkup } from "./view.js";
import itemImage from "./img/11475279.png"
import {setSelectedNavItem, getNavItem} from "./navSelection.js";

function MenuItem(name, description, imageUrl, price) {
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.price = price;
}

const menuItems = [
    new MenuItem("Margherita",
        "Classic pizza garnished with tomatoes, mozzarella and basil.",
        itemImage,
        11),
    new MenuItem("Marinara",
        "Classic simple pizza garnished with tomatoes, oregano and garlic.",
        itemImage,
        9),
    new MenuItem("Romana",
        "Pizza garnished with tomatoes, mozzarella, anchovies and oregano.",
        itemImage,
        12),
    new MenuItem("Quattro Formaggi",
        "Pizza garnished with tomatoes, mozzarella, stracchino, fontina and gorgonzola.",
        itemImage,
        12),
    new MenuItem("Pugliese",
        "Pizza garnished with tomatoes, mozzarella and onions",
        itemImage,
        11),
    new MenuItem("Diavola",
        "Pizza garnished with tomatoes, spicy salami, mozzarella and chili peppers.",
        itemImage,
        13.5),
];

class Menu extends View {
    constructor() {
        super();
    }

    loadView() {
        super.loadView();
        this.container.classList = ["menu"];

        this.container.appendChild(this.#createMenuHeroMarkdown());
        this.container.appendChild(this.#createMenuMarkdown());
    }

    #createMenuHeroMarkdown() {
        const heroHeading = document.createElement("h1");
        heroHeading.textContent = "Menu";
        const heroContent = document.createElement("div");
        heroContent.classList.add("hero-content");
        heroContent.appendChild(heroHeading);

        const heroImage = document.createElement("div");
        heroImage.classList.add("hero-image");
        heroImage.classList.add("menu");
        heroImage.appendChild(heroContent);

        return heroImage;
    }

    #createMenuMarkdown() {
        const container = document.createElement("div");
        container.classList = ["menu-items-content"];
        
        for (const itemDetails of menuItems) {
            const itemElement = this.#createMenuItemMarkdown(itemDetails);
            container.appendChild(itemElement);
        }
        const menuSection = createSectionMarkup();
        menuSection.appendChild(container);

        return menuSection;
    }

    #createMenuItemMarkdown({ name, description, imageUrl, price }) {
        const itemHeading = document.createElement("h3");
        itemHeading.textContent = name;

        const itemImage = document.createElement("img");
        itemImage.src = imageUrl;

        const itemDescription = document.createElement("p");
        itemDescription.textContent = description;
        itemDescription.classList = ["menu-item-description"];

        const itemPrice = document.createElement("p");
        itemPrice.textContent = `$${price.toString()}`;
        itemPrice.classList = ["menu-item-price"];

        const itemContainer = document.createElement("div");
        itemContainer.classList = ["menu-item"];
        itemContainer.appendChild(itemHeading);
        itemContainer.appendChild(itemImage);
        itemContainer.appendChild(itemDescription);
        itemContainer.appendChild(itemPrice);

        return itemContainer;
    }
}

const menuView = new Menu();

function displayMenu() {
    menuView.loadView();
    setSelectedNavItem(getNavItem("nav-menu"));
}

export default displayMenu;