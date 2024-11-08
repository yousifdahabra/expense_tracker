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

const from_date = document.getElementById("from_date");
const to_date = document.getElementById("to_date");

const filter_note = document.getElementById("filter_note");
const price_filter = document.getElementById("price_filter");
const type_filter = document.getElementById("type_filter");


let click_incomes_btn = 0
let click_expenses_btn = 0
let filter_options = {
    from_date:'',
    to_date:'',
    to_date:'',
    filter_note:'',
    price_filter:'',
    ignore:'',
};
const delete_table_event  = () =>{
    const deletes_btn = document.querySelectorAll(".delete-btn");
    deletes_btn.forEach((delete_btn) => {
        delete_btn.addEventListener("click", (event) => {
            const id = event.target.getAttribute('data-id');
            delete_form_model.style.display = "block";
            document.getElementById("delete_id").value = id
        });
    });
}
const edit_table_event = () =>{

    const edits_btn = document.querySelectorAll(".edit-btn");
    edits_btn.forEach((edit_btn) => {
        edit_btn.addEventListener("click", (event) => {
            const id = event.target.getAttribute('data-id');
            const note = event.target.getAttribute('data-note');
            const amount = event.target.getAttribute('data-amount');
            const date = event.target.getAttribute('data-date');
            const transaction_type = event.target.getAttribute('data-transaction_type');

            is_edit.value=id;
            document.getElementById("amount").value = amount;
            document.getElementById("date").value = date;
            document.getElementById("note").value = note;
            document.getElementById("transaction_type").value = transaction_type ;

            form_model.style.display = "block";
        });
    });
}

const empty_form = () =>{
    document.getElementById("is_edit").value = 0
    document.getElementById("amount").value = 0;
    document.getElementById("date").value = '';
    document.getElementById("note").value = '';
    document.getElementById("transaction_type").value = 'incomes';
}

const update_table = () =>{
    
    const transactions = get_transaction() || [];


    if(filter_options['price_filter'] != ''){
        if(filter_options['price_filter'] == 'ascending'){
            transactions.sort((a, b) => a.amount - b.amount)
        }else if(filter_options['price_filter'] == 'descending'){
            transactions.sort((a, b) => b.amount - a.amount)
        }
    }

    let body = ``;
    let total_incomes = 0;
    let total_expenses = 0;
    let total_balance = 0;
    transactions.forEach((transaction, index) => {
        if(filter_options['ignore']  != ''){
            if(transaction.transaction_type == filter_options['ignore'] ){}
            else return;
        }

        if(filter_options['from_date'] != '' && filter_options['to_date'] == '') filter_options['to_date'] = new Date().toJSON().slice(0, 10);
        if(filter_options['from_date'] == '' && filter_options['to_date'] != '') filter_options['from_date'] = new Date().toJSON().slice(0, 10);
        if(filter_options['from_date'] != '' && filter_options['to_date'] != ''){
            if(transaction.date >= filter_options['from_date'] && transaction.date <= filter_options['to_date']){}
            else return
        }
        if(filter_options['filter_note'] != ''){
            if(transaction.note.search(filter_options['filter_note']) != -1){}
            else return
        }
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
            <td>${transaction.transaction_type}</td>
            <td>${transaction.note}</td>
            <td>${transaction.date}</td>
            <td>
                <button data-id="${transaction.id}" data-note="${transaction.note}" data-transaction_type="${transaction.transaction_type}" data-date="${transaction.date}" data-amount="${transaction.amount}" class="edit-btn view">Edit</button>  
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
    delete_table_event();
    edit_table_event();
}

update_table()