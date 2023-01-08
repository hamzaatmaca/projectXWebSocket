//Import Auth
import auth from "../auth/auth.js";

//Import Pages
import login from "../../pages/login/login.js";
import contact from "../../pages/contact/contact.js";
import chat from "../../pages/chat/chat.js";

const appBody = document.querySelector("#app");

window.addEventListener("load", () => {
  const pathname = window.location.pathname;
  const authControl = auth();

  if (Boolean(authControl) === false) {
    appBody.innerHTML = login();
  } else {
    switch (pathname) {
      case "/":
        appBody.innerHTML = chat();
        break;
      case "/login":
        appBody.innerHTML = login();
        break;
      case "/contact":
        appBody.innerHTML = contact();
        break;
      default:
        appBody.innerHTML = chat();
        break;
    }
  }
});
