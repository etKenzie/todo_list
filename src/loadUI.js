import displaySidebar from "./displaySidebar.js";
import displayList from "./displayList.js";
import displayHeader from "./displayHeader.js";


const loadUI = (user) => {
    displayHeader(user);
    displaySidebar(user);
    displayList(user.getTasks());
    

}

export default loadUI;