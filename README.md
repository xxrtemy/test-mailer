
# Mailer
  ***Интеграция с AmoCRM не настроена и папка `"amo/"` является черновым вариантом***

### Description
  * В файле `"php/index.php"` задаются параметры для отправки (почта получателя (можно указать в массиве несколько), тема письма и тело письма);
  * Папка `"amo/"` и её содержимое отвечают за интеграцию с AmoCRM
  * В `"amo/config.php"` необходимо ввести актуальный код авторизации из интеграцииж;
  * В `"amo/tokens.txt"` записывается **access_token**;
  * Запись просиходит при вызове команды `http://localhost/amo/auth.php`.

