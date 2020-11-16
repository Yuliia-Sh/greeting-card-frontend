export const formValidator = {
  isValid,
};

function isValid(fieldName, fieldValue) {
  if (fieldValue === "" || !fieldValue) return true;
  if (fieldName === "first_name" || fieldName === "last_name") {
    console.log("check regexp for " + fieldName);

    return /[a-zA-Zа-яА-ЯёЁІіЇїґЄє][a-zA-Zа-яА-Я0-9ёЁІіЇїґЄє]{1,15}/.test(
      fieldValue
    );
  }
  if (fieldName === "login") {
    return /[a-zA-Zа-яА-Я0-9ёЁІіЇїґЄє]{1,30}/.test(fieldValue);
  } else {
    return true;
  }
}
