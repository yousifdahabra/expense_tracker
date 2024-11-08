const add_transaction = async (data) => {
    const post_method = await axios({
        method: 'post',
        url: 'http://localhost/expense_tracker/server/functions.php',
        data: data
      }) .then(function (response) {
        console.log('response')
        console.log(response)

        }).catch(function (error) {
            console.log('error')
            console.log(error)
        });
}
const get_transaction = async (transaction_id = 0) => {

    const post_method = await axios({
        method: 'post',
        url: 'http://localhost/expense_tracker/server/functions.php',
        data: {
            get_transactions: 'true',
            transaction_id :0,
        }
      }) .then(function (response) {
        console.log('response')
        console.log(response)
        return response.data;
        }).catch(function (error) {
            console.log('error')
            console.log(error)
        });
}
