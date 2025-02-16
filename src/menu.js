import { View, createSectionMarkup } from "./view.js";

class Menu extends View {

}

const menuView = new Menu();

function displayMenu() {
    menuView.loadView();
}

export default displayMenu;