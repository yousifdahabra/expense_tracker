const popup_btn = document.getElementById("transaction_btn");
const close_form_model = document.getElementById("close_form_model");
const form_model = document.getElementById("form_model");
const submit_form = document.getElementById("submit_form");
const table_body = document.getElementById("table_body");

const delete_form_model = document.getElementById("delete_form_model");
const close_delete_form_btn = document.getElementById("close_delete_form_btn");
const submit_delete_form = document.getElementById("submit_delete_form");
const is_edit = document.getElementById("is_edit");

const incomes_element = document.getElementById("incomes");
const expenses_element = document.getElementById("expenses");
const balance_element = document.getElementById("balance");

const only_incomes_btn = document.getElementById("only_incomes_btn");
const only_expenses_btn = document.getElementById("only_expenses_btn");

let click_incomes_btn = 0
let click_expenses_btn = 0

const delete_table  = () =>{
    const deletes_btn = document.querySelectorAll(".delete-btn");
    deletes_btn.forEach((delete_btn) => {
        delete_btn.addEventListener("click", (event) => {
            const id = event.target.getAttribute('data-id');
            delete_form_model.style.display = "block";
            document.getElementById("delete_id").value = id
        });
    });
}
const edit_table = () =>{

    const edits_btn = document.querySelectorAll(".edit-btn");
    edits_btn.forEach((edit_btn) => {
        edit_btn.addEventListener("click", (event) => {
            const id = event.target.getAttribute('data-id');
            const amount = event.target.getAttribute('data-amount');
            const date = event.target.getAttribute('data-date');
            const transaction_type = event.target.getAttribute('data-transaction_type');

            is_edit.value=id;
            document.getElementById("amount").value = amount;
            document.getElementById("date").value = date;
            document.getElementById("transaction_type").value = transaction_type ;

            form_model.style.display = "block";
        });
    });
}

const empty_form = () =>{
    document.getElementById("is_edit").value = 0
    document.getElementById("amount").value = 0;
    document.getElementById("date").value = '';
    document.getElementById("transaction_type").value = 'incomes';
}
const update_table = (ignore = '') =>{

    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    let body = ``;
    let total_incomes = 0;
    let total_expenses = 0;
    let total_balance = 0;
    transactions.forEach((transaction, index) => {
        if(transaction.transaction_type == ignore ) return;

        transaction.amount = parseFloat(transaction.amount);
        if(transaction.transaction_type == 'expenses'){
            total_expenses+=transaction.amount;
            total_balance -= transaction.amount;
        }else{
            total_incomes+=transaction.amount;
            total_balance += transaction.amount;
        }
        body+=`
        <tr class="${transaction.transaction_type}_style" >
            <td>${transaction.id}</td>
            <td>${transaction.amount} $</td>
            <td>${total_balance} $</td>
            <td> ${transaction.transaction_type}</td>
            <td>${transaction.date}</td>
            <td>
                <button data-id="${transaction.id}" data-transaction_type="${transaction.transaction_type}" data-date="${transaction.date}" data-amount="${transaction.amount}" class="edit-btn view">Edit</button>  
                <button data-id="${transaction.id}" class="delete-btn view"  >Delete</button>
            </td>
        </tr>
        `;
    });
    table_body.innerHTML = body
    incomes_element.innerHTML =total_incomes+" $";
    expenses_element.innerHTML = total_expenses+" $";
    balance_element.innerHTML = total_balance+" $";

    empty_form();
    delete_table();
    edit_table();
}

popup_btn.addEventListener("click",()=>{
    form_model.style.display = "block";
})
close_form_model.addEventListener("click",()=>{
    form_model.style.display = "none";
    empty_form();
})

close_delete_form_btn.addEventListener("click",()=>{
    delete_form_model.style.display = "none";
    empty_form();
})

submit_form.addEventListener("click", () => {
    const is_edit = document.getElementById("is_edit").value
    const amount = document.getElementById("amount").value || 0;
    const date = document.getElementById("date").value || new Date().getDate();
    const transaction_type = document.getElementById("transaction_type").value;
    let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

    if(is_edit == 0){
        const id = Math.random().toString(16).slice(2);
        const data = 
            {"id": id,"amount": amount,"date": date,"transaction_type": transaction_type}
        ;
        transactions.push(data);    

    }else{
        const data = 
            {"id": is_edit,"amount": amount,"date": date,"transaction_type": transaction_type}
        ;
        transactions.forEach((transaction, index) => {
            if(transaction.id == is_edit){
                transactions.splice(index, 1,data);
            }
        });
    }
    form_model.style.display = "none";
    localStorage.setItem('transactions', JSON.stringify(transactions));
    update_table()
});

submit_delete_form.addEventListener("click", () => {
    const delete_id_code = document.getElementById("delete_id").value || 0;
    let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    transactions.forEach((transaction, index) => {
        if(transaction.id == delete_id_code){
            transactions.splice(index, 1);
        }
    });
    localStorage.setItem('transactions', JSON.stringify(transactions));
    update_table();
    delete_form_model.style.display = "none";
});

only_expenses_btn.addEventListener("click",()=>{
    click_expenses_btn = 1- click_expenses_btn;
    only_expenses_btn.innerHTML= click_incomes_btn === 1 ? "Show All":"Only Expenses";
    update_table(click_expenses_btn === 1 ? 'incomes' : '')
})
only_incomes_btn.addEventListener("click",()=>{
    click_incomes_btn = 1 - click_incomes_btn;
    only_incomes_btn.innerHTML= click_incomes_btn === 1 ? "Show All":"Only Incomes";
    update_table(click_incomes_btn === 1 ?'expenses' : '')
})


update_table()