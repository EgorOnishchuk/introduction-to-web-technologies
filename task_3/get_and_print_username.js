function getValue(element) {
    return prompt(`Введите ${element}.`);
}

function printUsername(username) {
    alert(`Имя пользователя - ${username}.`);
}


printUsername(getValue('имя пользователя'));