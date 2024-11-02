const popup_btn = document.getElementById("transaction_btn")
const close_form_model = document.getElementById("close_form_model")
const form_model = document.getElementById("form_model")
const submit_form = document.getElementById("submit_form")

popup_btn.addEventListener("click",()=>{
    form_model.style.display = "block";
})
close_form_model.addEventListener("click",()=>{
    form_model.style.display = "none";
})