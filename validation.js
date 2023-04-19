function validation() {

    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const company = document.getElementById("company").value;
    const textarea = document.getElementById("textarea").value;
    var count = 20;


    if (email == "") {
        document.getElementById('email-error').innerHTML = "Please fill out this field.";
        document.getElementById('email').focus();

    }



    if (phone == "") {
        document.getElementById('phone-error').innerHTML = "Please fill out this field.";
        document.getElementById('phone').focus();

    }
    


    if (company == "") {
        document.getElementById('company-error').innerHTML = "Please fill out this field.";
        document.getElementById('company').focus();

    }
    


    // substring
    if (company.length > count) {
        var result = company.slice(0, count) + (company.length > count ? "..." : "");
        document.getElementById("company").value = result;
        
    }
    



    if (textarea == "") {
        document.getElementById('textarea-error').innerHTML = "Please fill out this field.";
        document.getElementById('textarea').focus();

    }
    


    if (textarea == "" || company == "" || phone == "" || email == "") {
        document.getElementById('error').innerHTML = "One or more fields have an error. Please check and try again.";

    }

    if (textarea != "" && company != "" && phone != "" && email != "") {
        alert("Thank you for reaching out via " + document.getElementById("company").value + ". We will get back to you at " + document.getElementById("email").value + ".");
        
        localStorage.setItem("email", document.getElementById("email").value);
        document.getElementById("em").innerHTML = localStorage.getItem("email");

        localStorage.setItem("phone", document.getElementById("phone").value);
        document.getElementById("ph").innerHTML = localStorage.getItem("phone");

        localStorage.setItem("company", document.getElementById("company").value);
        document.getElementById("cm").innerHTML = localStorage.getItem("company");

        localStorage.setItem("textarea", document.getElementById("textarea").value);
        document.getElementById("dt").innerHTML = localStorage.getItem("textarea");
    }

    return false;
}
