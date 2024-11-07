
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
    const note = document.getElementById("note").value || '';
    const date = document.getElementById("date").value || new Date().getDate();
    const transaction_type = document.getElementById("transaction_type").value;
    let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

    if(is_edit == 0){
        const id = Math.random().toString(16).slice(2);
        const data = 
            {"id": id,"amount": amount,"date": date,"transaction_type": transaction_type,"note": note}
        ;
        transactions.push(data);    

    }else{
        const data = 
            {"id": is_edit,"amount": amount,"date": date,"transaction_type": transaction_type,"note": note}
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
