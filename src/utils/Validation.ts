const fullNameRegex = /^[a-zA-Z'-]+\s[a-zA-Z'-]+(?:\s[a-zA-Z'-]+)*$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const validateFullName = (fullname: string) => {
  return fullNameRegex.test(fullname);
};

const validateEmail = (email: string) => {
  return emailRegex.test(email);
};

export default {
  validateEmail,
  validateFullName
};
