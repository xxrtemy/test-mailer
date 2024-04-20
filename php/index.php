<?php

require_once '../vendor/autoload.php';
$settings = require_once __DIR__ . '/mail_config.php';
require_once __DIR__ . '/mailer.php';

$body = "<h1>Данные пользователя</h1>\n
<p><strong>Телефон:</strong> " .$_POST['phone']."</p>";


if(!send_mail($settings['mail_settings_prod'], ['ya.alexgolubev@yandex.ru'], 'Заявка Михерев', $body)){
    $message = 'Ошибка';
}else{
    $message = 'Данные отправлены';
}

$response = ['message' => $message];
header('Content-type: aplication/json');
echo json_encode($response);