import { View, createSectionMarkup } from "./view.js";

function createFormItem(childElements) {
    const formItem = document.createElement("div");
    formItem.classList = ["form-item"];
    for (const element of childElements) {
        formItem.appendChild(element);
    }

    return formItem;
}

class Contact extends View {
    constructor() {
        super();
    }

    loadView() {
        super.loadView();
        this.container.classList = ["contact"];

        this.container.appendChild(this.#createHeroMarkup());
        this.container.appendChild(this.#createContactSectionMarkup());
    }

    #createHeroMarkup() {
        const heroHeading = document.createElement("h1");
        heroHeading.textContent = "Contact us";
        const heroContent = document.createElement("div");
        heroContent.classList.add("hero-content");
        heroContent.appendChild(heroHeading);

        const heroImage = document.createElement("div");
        heroImage.classList.add("hero-image");
        heroImage.classList.add("contact");
        heroImage.appendChild(heroContent);

        return heroImage;
    }

    #createContactSectionMarkup() {
        const contactForm = this.#createContactFormMarkup();
        const contactInfos = this.#createContactInformationMarkup();

        const section = createSectionMarkup();
        section.appendChild(contactForm);
        section.appendChild(contactInfos);

        return section;
    }

    #createContactFormMarkup() {
        const formHeading = document.createElement("h2");
        formHeading.textContent = "Contact us";
        const formDescription = document.createElement("p");
        formDescription.textContent = "Lorem ipsum dolor sit, amet consectetur\
         adipisicing elit. Hic quae, modi quam sed assumenda unde repudiandae,\
          nam obcaecati ipsum eius laboriosam praesentium maxime cumque magni\
           fugiat facere rem, ratione voluptates!";

        const nameLabel = document.createElement("label");
        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.id = "contact-name";
        nameInput.placeholder = "Enter your name"
        nameLabel.textContent = "Name";
        nameLabel.htmlFor = nameInput.id;
        const nameItemContainer = createFormItem([nameLabel, nameInput]);

        const emailLabel = document.createElement("label");
        const emailInput = document.createElement("input");
        emailInput.type = "text";
        emailInput.id = "contact-email";
        emailInput.placeholder = "Enter your email"
        emailLabel.textContent = "Email address";
        emailLabel.htmlFor = emailInput.id;
        const emailItemContainer = createFormItem([emailLabel, emailInput]);

        const messageLabel = document.createElement("label");
        const messageTextArea = document.createElement("textarea");
        messageTextArea.id = "contact-message";
        messageTextArea.placeholder = "Enter your message"
        messageLabel.textContent = "Message";
        messageLabel.htmlFor = messageTextArea.id;
        const messageItemContainer = createFormItem([messageLabel, messageTextArea]);

        const submitButton = document.createElement("button");
        submitButton.type = "submit";
        submitButton.textContent = "Submit";

        const form = document.createElement("form");
        form.appendChild(nameItemContainer);
        form.appendChild(emailItemContainer);
        form.appendChild(messageItemContainer);
        form.appendChild(submitButton);

        const content = document.createElement("div");
        content.classList.add("contact-form-content");
        content.appendChild(formHeading);
        content.appendChild(formDescription);
        content.appendChild(form);

        return content;
    }

    #createContactInformationMarkup() {
        const content = document.createElement("div");
        content.classList.add("contact-infos-content");

        return content;
    }
}

export default Contact;