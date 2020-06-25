// this is the "entry-point" for your JS app
// all the modules will meet here

// example,
// import {navBarToggler} from "./modules/navBarToggler";


// importing the "main" style-sheet to run it via JavaScript while in "development" mode
import "../css/style.css";

if (module.hot) {
    module.hot.accept();
}