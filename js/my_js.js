// Vanilla Javascript
var input = document.querySelector("#phoneNumber");
window.intlTelInput(input,({
  // options here
  allowDropdown:true,
  autXoPlaceholder:"polite",
  placeholderNumberType:"MOBILE",
  separateDialCode:false,
  preferredCountries: ["cm","us","gb" ],
}));