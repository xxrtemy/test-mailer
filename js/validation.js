"use strict"


let form = document.querySelector('.modal-form');

form.addEventListener('submit', formSend)




async function formSend(e){
    e.preventDefault();


    let error = formValidate();

    let formData = new FormData(form);
    if(error===0){
        let res = await fetch('../php/index.php', {
            method: 'POST',
            body: formData
        });
        if(res.ok){
            let result = await res.json();
            alert(result.message);
            form.reset();
        }else{
            alert('Произошла ошибка')
        }
    } else{
        alert('Заполните все обязательные поля')
    }
}


function formValidate(){
    let error = 0;
    const inputReq = document.querySelectorAll('._required')


    for(let i = 0; i < inputReq.length; i++){
        const input = inputReq[i];
        removeError(input);

        if(input.getAttribute('type') === 'tel'){
            if(!isValidPhone(input)){
                addError(input);
                error++
            }
        }else if(input.getAttribute('type') === 'checkbox' && input.checked === false){
            addError(input);
            error++;
        }
    }
    return error;
}



function addError(input){
    input.classList.add('_error')
}
function removeError(input){
    input.classList.remove('_error')
}


function isValidPhone(input) {
    if(input.value.replace(/\D/g, "").length >= 11) {
        return true
    } else {
        return false
    }
}