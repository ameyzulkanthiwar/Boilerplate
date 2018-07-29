function loginAuthentication(userId, password) {
  if (userId === "test" && password === "test") {
    // console.log("succes");

    return "Success";
  } else {
    // console.log("login failed");
    return "Login Failed";
  }
}

export const services = {
  loginAuthentication
};
