const reserveButton=document.querySelector(".reserve-button");

const inputFisrtname=document.querySelector(".first-name");
const inputLastname=document.querySelector(".last-name");
const inputCin=document.querySelector(".CIN");
const inputEmail=document.querySelector(".email");
const inputPhone=document.querySelector(".Phone");
const cinRegex = /^[A-Z]{2}\d{6}$/; 
const fullRegex =  /^[A-Za-z]+$/; 
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z]{4,5}.[a-zA-Z]{2,4}$/;
const phoneRegex = /^[0-9]{10}$/; 


reserveButton.addEventListener("click",function(){
    if (inputFisrtname.value=="" ||!fullRegex.test(inputFisrtname.value)) {
        alert( "first name invalide")
    }
    if (inputLastname.value=="" ||!fullRegex.test(inputLastname.value)) {
        alert( "last name invalide")
    }
    if (!cinRegex.test(inputCin.value)) {
        alert( "Format CIN invalide (ex. HH433920)")
    } 
    
    if (!emailRegex.test(inputEmail.value)) {
        alert( "Adresse e-mail invalide")
    } 
    if (!phoneRegex.test(inputPhone.value)) {
      alert( "Numéro de téléphone invalide")
    } 
})
