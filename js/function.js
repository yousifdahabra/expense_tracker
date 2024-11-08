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
          return post_method.data;  
  
    }catch (error) {
        return [];  
    }
}

const delete_transaction = async (transaction_id = 0) => {

    try{
        const post_method = await axios({
            method: 'post',
            url: 'http://localhost/expense_tracker/server/functions.php',
            data: {
                delete_transactions: 'true',
                transaction_id :transaction_id,
            }
          })  
          return post_method.data;  
  
    }catch (error) {
        return [];  
    }
}

