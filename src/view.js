class View {
    constructor() {
    }

    loadView() {
        this.container = document.createElement("div");
        const content = document.querySelector("#content");
        this.#clearContent(content);
        content.appendChild(this.container);
    }

    #clearContent(content) {
        while(content.lastElementChild) {
            content.removeChild(content.lastElementChild);
        }
    }
}

function createSectionMarkup() {
    const section = document.createElement("div");
    section.classList.add("content-section");

    return section;
}

export {View, createSectionMarkup}