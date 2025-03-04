function setToken(token) {
  if (localStorage.getItem("token")) {
    localStorage.removeItem("token");
  }
  localStorage.setItem("token", token);
}

export default setToken;
