const add_transaction = async (data) => {
    console.log('data')
    console.log(data)

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

    try{
        const post_method = await axios({
            method: 'post',
            url: 'http://localhost/expense_tracker/server/functions.php',
            data: {
                get_transactions: 'true',
                transaction_id :0,
            }
          })  
          console.log('post_method');
          console.log(post_method.data);
          return post_method.data;  // Return the data directly from here
  
    }catch (error) {
        console.log('error');
        console.log(error);
        return [];  // Return an empty array if there’s an error to avoid issues
    }
}
