
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
    const transaction_id  = document.getElementById("transaction_id").value || 0;
    const amount = document.getElementById("amount").value || 0;
    const note = document.getElementById("note").value || '';
    const date = document.getElementById("date").value || new Date().getDate();
    const transaction_type = document.getElementById("transaction_type").value;
    
    const data = 
    {"submit_transaction_form": 'true',"transaction_id": transaction_id, "amount": amount,"date": date,"transaction_type": transaction_type,"note": note};
    await add_transaction(data);

    form_model.style.display = "none";
    await update_table()
});

submit_delete_form.addEventListener("click",async () => {
    const transaction_id = document.getElementById("delete_id").value || 0;
    await delete_transaction(transaction_id);
    await update_table();
    delete_form_model.style.display = "none";
});
