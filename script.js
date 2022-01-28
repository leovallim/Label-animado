const fields = document.querySelectorAll('.field');

fields.forEach(button => {
    button.addEventListener('focusout', () => {
        if(button.value.length > 0){
            button.classList.add('field--text')
        }else{
            button.classList.remove('field--text')
        }
    })
})