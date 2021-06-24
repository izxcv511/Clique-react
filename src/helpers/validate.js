import { regexEmail, regexPassword } from "../const/index";

export function validateEmail(email) {
  return regexEmail.test(String(email).toLowerCase());
}
export function validatePassword(password) {
  return regexPassword.test(password);
}
