let formulario = document.getElementById("form");
let pass1 = document.getElementById("password1");
let pass2 = document.getElementById("password2");
let divTerm = document.getElementById("divTerminos");
let term = document.getElementById("labelTerms");
let inputTerms = document.getElementById("terminos");
let servicesTerms = document.getElementById("servicesTerms");


document.getElementById("boton").addEventListener("click", function () {
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (form.checkValidity() && (document.getElementById("terminos").checked)) {
                form.classList.add('was-validated');
                divTerm.classList.remove("text-danger");
                
                term.classList.remove("text-danger");
                
                divTerm.classList.add("text-success");
                term.classList.add("text-success");
                setTimeout(() => {
                    location.reload();
                }, 1000);

            } else if (form.checkValidity() && !(document.getElementById("terminos").checked)) {
                event.preventDefault()
                //event.stopPropagation()
                divTerm.classList.add("text-danger");
                servicesTerms.innerHTML += "Debe aceptar los términos de servicio."
                term.classList.add("text-danger");
            } else if (!form.checkValidity() && (document.getElementById("terminos").checked)) {
                event.preventDefault();
                divTerm.classList.add("text-success");
                term.classList.add("text-success");
            } else if (!form.checkValidity() && !(document.getElementById("terminos").checked)) {
                event.preventDefault()
                //event.stopPropagation()
                divTerm.classList.add("text-danger");
                servicesTerms.innerHTML += "Debe aceptar los términos de servicio."
                term.classList.add("text-danger");
            }

            document.addEventListener("change", checkBox);
            form.classList.add('was-validated')
        }, false)
    })
})
formulario.oninput = () => {
    pass2.setCustomValidity(pass2.value != pass1.value ? "Las contraseñas no coinciden" : "")
}
function checkBox() {
    if ((document.getElementById("terminos").checked)) {
        divTerm.classList.remove("text-danger");
        servicesTerms.innerHTML = ""
        term.classList.remove("text-danger");
        divTerm.classList.add("text-success");
        term.classList.add("text-success");
    }
}

