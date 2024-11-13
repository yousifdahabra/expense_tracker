const add_transaction = async (data) => {

    const post_method = await axios({
        method: 'post',
        url: 'http://localhost/expense_tracker/server/functions.php',
        data: data,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
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
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
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
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
          })  
          return post_method.data;  
  
    }catch (error) {
        return [];  
    }
}
const check_login = async () => {

    try{
        const post_method = await axios({
            method: 'post',
            url: 'http://localhost/expense_tracker/server/functions.php',
            data: {
                check_login: 'true',
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
          })  
          
          if(post_method.data.message == 0){
            window.location = "/expense_tracker"
          }
  
    }catch (error) {
        return [];  
    }
}
const check_logout = async () => {

    try{
        const post_method = await axios({
            method: 'post',
            url: 'http://localhost/expense_tracker/server/functions.php',
            data: {
                check_logout: 'true',
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
          })  
          
          if(post_method.data.states == 1){
            window.location = "/expense_tracker"
          }
  
    }catch (error) {
        return [];  
    }
}

check_login()

