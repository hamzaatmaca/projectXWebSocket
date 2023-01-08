const auth = () => {
  let token = localStorage.getItem("chat.token");
  if (token) {
    return true;
  } else {
    return false;
  }
};

export default auth;
