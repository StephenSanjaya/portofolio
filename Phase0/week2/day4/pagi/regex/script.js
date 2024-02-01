document.getElementById("contactForm").addEventListener("submit", function (event){
    event.preventDefault(); //prevent browser to redirect/refresh

    // validate email
    var email = document.getElementById("email").value;
    var date = document.getElementById("date").value;
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var datePattern = /^\d{2}-\d{2}-\d{4}$/;

    if(!emailPattern.test(email)){
        document.getElementById("emailError").textContent="Alamat email tidak valid !";
    }else{
        document.getElementById("emailError").textContent="";
    }

    if(!datePattern.test(date)){
        document.getElementById("dateError").textContent="date tidak valid !";
    }else{
        document.getElementById("dateError").textContent="";
    }
    
});