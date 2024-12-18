const form = document.getElementById('useless-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const statusMessage = document.getElementById('status-message');


let goodName = false;
let goodEmail = false;


nameInput.addEventListener('input', () => {
    const name = nameInput.value.trim();

    if (name.length < 3) {
        nameError.textContent = 'Имя должно содержать не менее 3 символов';
        goodName = false
    } else {
        nameError.textContent = '';
        goodName = true
    }
});


emailInput.addEventListener('input', () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Некорректный email';
        goodEmail = false
    } else {
        emailError.textContent = '';
        goodEmail = true
    }
});

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();

    if (!(goodName && goodEmail)) {
        return;
    }

    const formData = new FormData(form);

    try {
        const response = await fetch('http://localhost:8000', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            statusMessage.textContent = 'Форма успешно отправлена!';
            statusMessage.style.color = 'green';

            form.reset();
        } else {
            statusMessage.textContent = 'Ошибка: сервер вернул ошибку.';
            statusMessage.style.color = 'red';
        }
    } catch (error) {
        statusMessage.textContent = 'Ошибка: не удалось отправить форму.';
        statusMessage.style.color = 'red';
    }
});
