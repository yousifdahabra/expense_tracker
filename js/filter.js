

from_date.addEventListener("change",()=>{
    filter_options['from_date'] = from_date.value;
    filter_options['to_date'] = to_date.value;
    update_table()
})
to_date.addEventListener("change",()=>{
    filter_options['from_date'] = from_date.value;
    filter_options['to_date'] = to_date.value;
    update_table()
})
filter_note.addEventListener("input",()=>{
    filter_options['filter_note'] = filter_note.value;
    update_table()
})
price_filter.addEventListener("change",()=>{
    filter_options['price_filter'] = price_filter.value;
    update_table(filter_options)
})
type_filter.addEventListener("change",()=>{
    filter_options['ignore'] = type_filter.value;
    update_table()
})