const submit_login_form = document.getElementById('submit_login_form')

submit_login_form.addEventListener("click",()=>{
    submit_login_form.setAttribute('displaced',true);
    submit_login_form.classList.toggle('displaced');
    
})
