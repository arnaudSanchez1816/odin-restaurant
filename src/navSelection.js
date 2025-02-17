const SELECTED_NAV_ITEM_CLASS = "selected";
const HEADER_NAV_ITEM_CLASS = "header-nav-item";

function setSelectedNavItem(navItem) {
    const selectedNavItem = document.querySelector(`.${HEADER_NAV_ITEM_CLASS}.${SELECTED_NAV_ITEM_CLASS}`);
    if(selectedNavItem) {
        selectedNavItem.classList.remove(SELECTED_NAV_ITEM_CLASS);
    }

    if(!navItem) {
        return;
    }
    navItem.classList.add(SELECTED_NAV_ITEM_CLASS);
}

function createNavItem(text, navItemClass, navCallback) {
    const li = document.createElement("li");
    li.classList.add(...[HEADER_NAV_ITEM_CLASS, navItemClass]);

    const button = document.createElement("button");
    button.attributes["type"] = "button";
    button.textContent = text;
    button.addEventListener("click", (e) => {
        if (e.target.classList.contains(SELECTED_NAV_ITEM_CLASS)) return;
        navCallback();
        setSelectedNavItem(li);
    });

    li.appendChild(button);

    return li;
}

function getNavItem(navItemClass) {
    return document.querySelector(`.${HEADER_NAV_ITEM_CLASS}.${navItemClass}`);
}

export {createNavItem, setSelectedNavItem, getNavItem};