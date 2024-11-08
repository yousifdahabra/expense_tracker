const submit_login_form = document.getElementById('submit_login_form')
const post_login = async () => {
    const user_name = document.getElementById('user_name').value
    const password = document.getElementById('password').value
    const post_method = await axios({
        method: 'post',
        url: 'http://localhost/expense_tracker/server/functions.php',
        data: {
            submit_login_form: 'true',
            user_name,
            password,
        }
      }) .then(function (response) {
        console.log('response')
        console.log(response)
        console.log(JSON.parse(response.config.data))
        });
      
}

submit_login_form.addEventListener("click",()=>{
    submit_login_form.setAttribute('displaced',true);
    submit_login_form.classList.toggle('displaced');
    post_login()
})
