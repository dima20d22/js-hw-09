console.log("ssss");
let formData = {
  email: "",
  message: "",
};
const localStorageKey = "feedbackMessage";

const form = document.querySelector(".feedback-form");
const textarea = form.elements.message;
const emailfield = form.elements.email;

const savedData = JSON.parse(localStorage.getItem(localStorageKey)) || {};
formData = { ...formData, ...savedData };
textarea.value = savedData.message || "";
emailfield.value = savedData.email || "";

form.addEventListener("input", (e) => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!formData.email.trim() || !formData.message.trim()) {
    alert("sosi");
    return;
  }

  console.log("Message: ", formData);
  localStorage.removeItem(localStorageKey);
  formData = { email: "", message: "" };
  form.reset();
});
