const add_transaction = async (data) => {

    const post_method = await axios({
        method: 'post',
        url: 'http://localhost/expense_tracker/server/functions.php',
        data: data
      }) .then(function (response) {

        }).catch(function (error) {
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
          return post_method.data;  // Return the data directly from here
  
    }catch (error) {
        return [];  // Return an empty array if there’s an error to avoid issues
    }
}
