const init = () => {
    const inputUsername = document.querySelector('input[type="username"]');
    const inputPassword = document.querySelector('input[type="password"]');
    const submitButton = document.querySelector('.login_submit');

    if (submitButton) {
        submitButton.addEventListener('click', (event) => {
            event.preventDefault();

            fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
               body: JSON.stringify({
                    email: inputUsername.value,
                    password: inputPassword.value
                })
            }).then((response) => {
                console.log(response)
                return response.json();
            }).then((data) => {
                console.log(data)
            })
        })
    }
}

window.onload = init;
