const form = document.forms[0];       
       form.addEventListener('submit', (event) => {
        event.preventDefault();
    
        const values = [...new FormData(form).values()];
        console.log(values);
        if (!checkIfNotNull(values[0])) return showMessage('error', 'Заполните поле Логин');
        if (!checkPhone(values[1])) return showMessage('error', 'Неверно введен номер телефона');
         if (!checkEmail(values[2])) return showMessage('error', 'Неверно введена почта');
         if (!checkPassword(values[3])) return showMessage('error', ' Неверно введен Пароль. Не менее 8 символов:цифры,заглавные и строчные буквы');
        showMessage('success', 'Вы, '+values[0]+', успешно зарегистрировались');
        console.log(values);
    });
        
    function checkPhone(phone) {
            var ph = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;  
            return phone != "" && ph.test(phone);
        }
        function checkEmail(mail) {
            var em=/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/; 
            return mail != "" && em.test(mail);
        }

        function checkIfNotNull(str) {
            return str !== '';
        }
        function checkPassword(mail) {
            var em=/^(?=.*\d)(?=.*[A-Z]).{8,}$/; 
            return mail != "" && em.test(mail);
        }
        function showMessage(type, text) {
            Swal.fire({
                text: text,
                icon: type,
                showConfirmButton: false
            });
        }
        function showError() {
            Swal.fire({
                text: 'К сожалению мы не можем сейчас вас авторизировать Х(',
                icon: 'error',
                showConfirmButton: false
            });
        }