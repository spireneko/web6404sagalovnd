const form = document.getElementById('useless-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');

nameInput.addEventListener('input', () => {
    if (nameInput.value.length < 3) {
        nameError.textContent = 'Имя должно содержать не менее 3 символов';
    } else {
        nameError.textContent = '';
    }
});

form.addEventListener('submit', (event) => {
    if (nameInput.value.length < 3) {
        event.preventDefault();
        alert('Ошибка: имя слишком короткое');
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        event.preventDefault();
        alert('Ошибка: некорректный email');
    }
});
