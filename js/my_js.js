// Vanilla Javascript
var input = document.querySelector("#phone");
window.intlTelInput(input,({
  // options here
  allowDropdown:true,
  autXoPlaceholder:"polite",
  placeholderNumberType:"MOBILE",
  separateDialCode:false,
  preferredCountries: ["cm","us","gb" ],
}));


formElem.onsubmit = async (e) => {
  e.preventDefault();
  
  let response = await fetch('https://joan500.pythonanywhere.com/api/landing/landing', {
    method: 'POST',
    body: new FormData(formElem)
  });
  console.log("Send submitted");
  document.getElementById("formElem").reset();

  let result = await response.json();
  //console.log(result)
  
  alert(result.message);
  alert('TEst');
};