// Design source
// https://seasiderestaurant.webflow.io/

import { View, createSectionMarkup } from "./view.js";
import locationImage from "./img/Joe's_Pizza.jpg"

class Home extends View {
    constructor() {
        super();
    }
    
    loadView() {
        super.loadView();
        this.container.classList = ["home"];

        const hero = this.#createHeroMarkup();
        this.container.appendChild(hero);

        const summary = this.#createSummaryMarkup();
        this.container.appendChild(summary);

        const aboutUs = this.#createAboutUsMarkup();
        this.container.appendChild(aboutUs);
    }

    #createHeroMarkup() {
        const heroMenuButton = document.createElement("button");
        heroMenuButton.attributes["type"] = "button";
        heroMenuButton.textContent = "See menu";

        const heroText = document.createElement("div");
        heroText.classList.add("hero-text");
        const heroHeading = document.createElement("h1");
        heroHeading.textContent = "Joe's Pizza";
        const heroSubHeading = document.createElement("p");
        heroSubHeading.textContent = "It's Pizza time!";
        heroText.appendChild(heroHeading);
        heroText.appendChild(heroSubHeading);

        const heroContent = document.createElement("div");
        heroContent.classList.add("hero-content");
        heroContent.appendChild(heroText);
        heroContent.appendChild(heroMenuButton);

        const heroImage = document.createElement("div");
        heroImage.classList.add("hero-image");
        heroImage.appendChild(heroContent);

        return heroImage;
    }

    #createSummaryMarkup() {
        const summaryTitle = document.createElement("p");
        summaryTitle.textContent = "What we're about.";
        const summaryText = document.createElement("p");
        summaryText.textContent = "The best Pizza in town, guaranteed delivery in 29 minutes or less."

        const summary = document.createElement("div");
        summary.classList.add("summary");
        summary.appendChild(summaryTitle);
        summary.appendChild(summaryText);

        const section = createSectionMarkup();
        section.appendChild(summary);

        return summary;
    }

    #createAboutUsMarkup() {
        const aboutUsHeading = document.createElement("h2");
        aboutUsHeading.textContent = "Who we are";
        const aboutUsText = document.createElement("p");
        aboutUsText.textContent = "We serve the best pizzas in New York. We use only the \
                        best ingredients and everything we make is handmade and fresh. Our \
                        deliveries are so fast even Spider-Man himself would struggle to deliver \
                        faster pizzas than us."

        const aboutUsDescription = document.createElement("div");
        aboutUsDescription.classList.add("about-us-description");
        aboutUsDescription.append(aboutUsHeading);
        aboutUsDescription.append(aboutUsText);

        const aboutUsImage = document.createElement("img");
        aboutUsImage.alt = "Photo of Joe's pizza restaurant.";
        aboutUsImage.src = locationImage;
        aboutUsImage.classList.add("about-us-location");

        const aboutUs = document.createElement("div");
        aboutUs.classList.add("about-us");
        aboutUs.appendChild(aboutUsDescription);
        aboutUs.appendChild(aboutUsImage);

        const section = createSectionMarkup();
        section.appendChild(aboutUs);
        return section;
    }
}

export default Home;