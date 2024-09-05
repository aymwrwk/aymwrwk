document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    const correctPassword = 'aymwrwk'; // Substitua pela palavra específica

    if (password === correctPassword) {
        alert('Acesso concedido!');
        window.location.href = 'chan1.html';
    } else {
        errorMessage.textContent = 'Palavra secreta incorreta. Tente novamente.';
    }
});
