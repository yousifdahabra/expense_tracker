const popup_btn = document.getElementById("transaction_btn")
const close_form_model = document.getElementById("close_form_model")
const form_model = document.getElementById("form_model")
const submit_form = document.getElementById("submit_form")

function update_table(){
    
}

popup_btn.addEventListener("click",()=>{
    form_model.style.display = "block";
})
close_form_model.addEventListener("click",()=>{
    form_model.style.display = "none";
})

submit_form.addEventListener("click", () => {
    const amount = document.getElementById("amount").value || 0;
    const date = document.getElementById("date").value || new Date().getDate();
    const transaction_type = document.getElementById("transaction_type").value;
    let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

    const data = [
        {"amount": amount,"date": date,"transaction_type": transaction_type}
    ];

    transactions.push(data);
    localStorage.setItem('transactions', JSON.stringify(transactions));
});


