

document.querySelector('.modal-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let formData = new FormData(this);
    let phoneNumber = formData.get('phone');

    fetch('https://julimailjuli.amocrm.ru/api/v4/leads', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + '',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'name': 'Новая сделка',
            'custom_fields_values': [
                {
                    'field_id': '623845',
                    'values': [
                        {
                            'value': phoneNumber
                        }
                    ]
                },
                {
                    'field_id': '538291',
                    'values': [
                        {
                            'value': true
                        }
                    ]
                }
            ]
        })
    })
    .then(response => {
        if (response.ok) {
            alert('Сделка успешно добавлена в amoCRM');
        } else {
            alert('Ошибка при добавлении сделки в amoCRM');
        }
    })
    .catch(error => console.error('Ошибка:', error));
});