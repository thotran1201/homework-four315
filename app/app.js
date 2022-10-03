// import Swal from 'sweetalert2';
// window.Swal = Swal;

function init() {
    $("#submit").on("click", function(e) {
        e.preventDefault();
        let fn = $("#fName").val();
        let ln = $("#lName").val();

        if (fn == "") {
            console.log("Enter your first name");
        } else if (ln == "") {
            alert("You need to enter your last name");
        } else {
            alert("yay");
        }
    });
}

$(document).ready(function () {
    init();
});

$(document).ready(function() {
    console.log("ready");
    console.log("this is another change");
});

$("#login").on("click", function () {
    console.log("loaded");
    Swal.fire("Any fool can use a computer");
    
    Swal.fire({
        title: 'Login Form',
        html: `<input type="text" id="login" class="swal2-input" placeholder="Username">
        <input type="password" id="password" class="swal2-input" placeholder="Password">`,
        confirmButtonText: 'Sign in',
        focusConfirm: false,
        preConfirm: () => {
          const login = Swal.getPopup().querySelector('#login').value
          const password = Swal.getPopup().querySelector('#password').value
          if (!login || !password) {
            Swal.showValidationMessage(`Please enter login and password`)
          }

          if (login != "Tom" && password != "Tran") {
            Swal.showValidationMessage(`Username or password is incorrect`)
          }
          return { login: login, password: password }
        }
      }).then((result) => {
        Swal.fire(`
          You logged in successfully! The Matrix welcomes you!
        `.trim())
      })      
});