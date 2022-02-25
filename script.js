const feedbackMessage = document.querySelector('.feedback-message');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#password-confirm');

function checkDifference(password, confirmPassword) {
    if (password !== confirmPassword) {
        return false;
    }
    else {
        return true;
    }
}

passwordInput.addEventListener('keyup', (e) => {
    if (e.target.value !== confirmPasswordInput.value) {
        passwordInput.classList.add('red-borders');
        confirmPasswordInput.classList.add('red-borders');
        feedbackMessage.style.visibility = 'visible';
    }
    else {
        passwordInput.classList.remove('red-borders');
        confirmPasswordInput.classList.remove('red-borders');
        feedbackMessage.style.visibility = 'hidden';
    }
})

confirmPasswordInput.addEventListener('keyup', (e) => {
    if (e.target.value !== passwordInput.value) {
        passwordInput.classList.add('red-borders');
        confirmPasswordInput.classList.add('red-borders');
        feedbackMessage.style.visibility = 'visible';
    }
    else {
        passwordInput.classList.remove('red-borders');
        confirmPasswordInput.classList.remove('red-borders');
        feedbackMessage.style.visibility = 'hidden';
    }
})