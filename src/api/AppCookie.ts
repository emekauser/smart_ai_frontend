function storeTokenInCookie(token: string, email: string, fullName: string) {
  let expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 1); // Add 1 day
  document.cookie = `token=${token};email=${email};fullname=${fullName}; expires=${expirationDate.toUTCString()}; path=/`;
}

const getToken = () => {
  return getCookie("token");
};

const getCookie = (name: string) => {
  const nameEQ = name + "=";

  const ca = decodeURIComponent(document.cookie).split(";");

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }

  return null;
};

export { getToken, storeTokenInCookie, getCookie };
