const submit_login_form = document.getElementById('submit_login_form')
const post_login = async () => {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    const post_method = await axios({
        method: 'post',
        url: 'http://localhost/expense_tracker/server/functions.php',
        data: {
            submit_login_form: 'true',
            username:username,
            password:password,
        }
      }) .then(function (response) {
        console.log('response')
        console.log(response)
        console.log((response.data))
        }).catch(function (error) {
            console.log('error')
            console.log(error)
        });
      
}

submit_login_form.addEventListener("click",()=>{
    submit_login_form.setAttribute('displaced',true);
    submit_login_form.classList.toggle('displaced');
    post_login()
    submit_login_form.removeAttribute('displaced');
    submit_login_form.classList.toggle('displaced');
})
