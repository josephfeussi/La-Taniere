// Vanilla Javascript
var input = document.querySelector("#phone");
window.intlTelInput(input, {
  // options here
  allowDropdown: true,
  autXoPlaceholder: "polite",
  placeholderNumberType: "MOBILE",
  separateDialCode: false,
  preferredCountries: ["cm", "us", "gb"],
});

const form = document.getElementById("myForm");
document.getElementById("myAlert").style = "display:none";

function submit_record() {
  var fd = new FormData(form);

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://joan500.pythonanywhere.com/api/landing/landing");
  if (fd.get("first_name") != "" && fd.get("last_name")!="" && fd.get("email")!="" && fd.get("phone")!=""){
    xhr.send(fd);
    xhr.onreadystatechange = () => {
      // In local files, status is 0 upon success in Mozilla Firefox
      if (xhr.readyState === XMLHttpRequest.DONE) {
        const status = xhr.status;
        if (status === 0 || (status >= 200 && status < 400)) {
          // The request has been completed successfully
          document.getElementById("myAlert").style = "display:none";
          console.log(xhr.responseText);
          console.log("The request has been completed successfully");
          user_name = fd.get("first_name");
          form.reset();
          alert(user_name + " , vous avez été enregistré.");
        } else {
          // Oh no! There has been an error with the request!
          console.log("Error");
          alert(user_name + "Erreur , veuillez essayer à nouveau.");
        }
      }
    };
  } else{
    alert("Veuillez remplir vos informations.");
  }
  
 
}