
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

submit_form.addEventListener("click", async () => {
    const is_edit = document.getElementById("is_edit").value
    const amount = document.getElementById("amount").value || 0;
    const note = document.getElementById("note").value || '';
    const date = document.getElementById("date").value || new Date().getDate();
    const transaction_type = document.getElementById("transaction_type").value;
    let  transaction_id = is_edit
    if(transaction_id == 0){
        id = Math.random().toString(16).slice(2);
    }
    const data = 
    {"submit_transaction_form": 'true',"is_edit": is_edit, "amount": amount,"date": date,"transaction_type": transaction_type,"note": note};
    await add_transaction(data);

    form_model.style.display = "none";
    await update_table()
});

submit_delete_form.addEventListener("click",async () => {
    const delete_id_code = document.getElementById("delete_id").value || 0;
    let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    transactions.forEach((transaction, index) => {
        if(transaction.id == delete_id_code){
            transactions.splice(index, 1);
        }
    });
    localStorage.setItem('transactions', JSON.stringify(transactions));
    await update_table();
    delete_form_model.style.display = "none";
});
