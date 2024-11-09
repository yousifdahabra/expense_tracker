const submit_login_form = document.getElementById('submit_login_form')
const message_alert = document.getElementById('message_alert')

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
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(function (response) {
        console.log('response')
        console.log(response)
        if(response.data.states === '1'){
        setTimeout(
            ()=>{
                window.location.href = "http://localhost/expense_tracker/pages/dashboard.php";
            }
        ),
            2000
        }
        message_alert.innerHTML = response.data.messages

    });
}

submit_login_form.addEventListener("click",()=>{
    submit_login_form.setAttribute('displaced',true);
    submit_login_form.classList.toggle('displaced');
    post_login()
    submit_login_form.removeAttribute('displaced');
    submit_login_form.classList.toggle('displaced');
})
