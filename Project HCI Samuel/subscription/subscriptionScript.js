let menu = document.querySelector('#menu-bar');
let navbar =document.querySelector('.navbar');

menu.onclick=() =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}
document.addEventListener("DOMContentLoaded", () => {
    const nationality = document.getElementById("nationality")
    fetch('https://restcountries.com/v3.1/all').then(res => {
        return res.json();
    }).then(data => {
        let output = ""
        let list = []
        data.forEach(nationality => {
            console.log(nationality.name.common)
            list.push(nationality.name.common)
        })
        list = list.sort()
        list.unshift("<option disabled selected hidden>Choose country*</option>")
        for(let i=0; i<list.length; i++){
            output += `<option>${list[i]}</option>`
        }
        nationality.innerHTML = output;
    }).catch(err => {
        console.log(err)
    })
})
function validateForm(){
    var Name = document.getElementById("Name").value
    var email = document.getElementById("email").value
    var phone = document.getElementById("phone").value
    var nationality = document.getElementById("nationality").value
    var checkbox = document.getElementsByName("checkbox")[0].checked
    

    if(Name == ""){
        alert("Name cannot be empty")
    }

    else if(!email.endsWith("@gmail.com")){
        alert("Email must ends with @gmail.com")
    }

    else if(phone.charAt(0) != 0){
        alert("Phone number must start with '0'")
    }

    else if(nationality == ""){
        alert("Country cannot be empty")
    }

    else if(!checkbox){
        alert("Terms and conditions must be agreed")
    }

    else {
        alert("Form submitted successfully")
    }

}

function checkPassword(password){
    if(password.length < 8){
        return false;
    }
    var isNum = false
    var isChar = false
    for(var i=0 ; i<password.length ; i++){
        if(isNaN(password[i])){
            isChar = true;
        }
        else{
            isNum = true;
        }
    }

    if(isChar && isNum){
        return true;
    }
    else{
        return false;
    }
}