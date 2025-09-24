function storeTokenInCookie(token: string, email: string, fullName: string) {
  let expirationDate = new Date();

  expirationDate.setDate(expirationDate.getDate() + 1); // Add 1 day
  document.cookie = `fw_token=${token};fw_expires=${expirationDate.toUTCString()};`;
  document.cookie = `fw_email=${email};expires=${expirationDate.toUTCString()};`;
  document.cookie = `fw_fullname=${fullName}:expires=${expirationDate.toUTCString()};`;
}

const getToken = () => {
  return getCookie("fw_token");
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

const deleteCookie = (name: string) => {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;";
};

const clearCookie = () => {
  deleteCookie("fw_token");
  deleteCookie("fw_email");
  deleteCookie("fw_fullname");
};

export { getToken, storeTokenInCookie, getCookie, clearCookie };
