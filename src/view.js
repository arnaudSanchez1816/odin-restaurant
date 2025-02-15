class View {
    constructor() {
    }

    loadView() {
        this.content = document.querySelector("#content");
        this.#clearContent();
    }

    #clearContent() {
        while(this.content.lastElementChild) {
            this.content.removeChild(this.content.lastElementChild);
        }
    }
}

function createSectionMarkup() {
    const section = document.createElement("div");
    section.classList.add("content-section");

    return section;
}

export {View, createSectionMarkup}