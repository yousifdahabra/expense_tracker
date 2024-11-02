const popup_btn = document.getElementById("transaction_btn")
const close_form_model = document.getElementById("close_form_model")
const form_model = document.getElementById("form_model")
const submit_form = document.getElementById("submit_form")
const table_body = document.getElementById("table_body")

const delete_form_model = document.getElementById("delete_form_model")
const close_delete_form_btn = document.getElementById("close_delete_form_btn")
const submit_delete_form = document.getElementById("submit_delete_form")

const edits_btn = document.querySelectorAll(".edit-btn");

function update_table(){

    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    let body = ``;
    transactions.forEach((transaction, index) => {
        body+=`<tr>
        <td>${transaction.amount}</td>
        <td> ${transaction.transaction_type}</td>
        <td>${transaction.date}</td>
        <td><button data-id="${transaction.id}" class="edit-btn view">Edit</button>   <button data-id="${transaction.id}" class="delete-btn view"  >Delete</button></td>
        </tr>
        `;
    });
    table_body.innerHTML = body

    const deletes_btn = document.querySelectorAll(".delete-btn");
    deletes_btn.forEach((delete_btn) => {
        console.log('id')
        delete_btn.addEventListener("click", (event) => {
            var id = event.target.getAttribute('data-id');
            console.log('id')
            console.log(id)
            delete_form_model.style.display = "block";
            document.getElementById("delete_id").value = id
        });
    });
    
}

popup_btn.addEventListener("click",()=>{
    form_model.style.display = "block";
})
close_form_model.addEventListener("click",()=>{
    form_model.style.display = "none";
})

close_delete_form_btn.addEventListener("click",()=>{
    delete_form_model.style.display = "none";
})

submit_form.addEventListener("click", () => {
    const amount = document.getElementById("amount").value || 0;
    const date = document.getElementById("date").value || new Date().getDate();
    const transaction_type = document.getElementById("transaction_type").value;
    const id = Math.random().toString(16).slice(2);
    const data = 
        {"id": id,"amount": amount,"date": date,"transaction_type": transaction_type}
    ;
    let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

    transactions.push(data);
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
    update_table()
});

  
update_table()