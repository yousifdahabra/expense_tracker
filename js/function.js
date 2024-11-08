const add_trans = async () => {
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
        if(response.data.message === 'true'){
            window.location.href = "http://localhost/expense_tracker/pages/dashboard.php";
        }
        }).catch(function (error) {
            console.log('error')
            console.log(error)
        });
}
