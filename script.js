document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    const correctPassword = 'eschizo'; // Substitua pela palavra específica

    if (password === correctPassword) {
        alert('Acesso concedido!');Inconsistênciadiscord
        window.location.href = 'main.html';
    } else {
        errorMessage.textContent = 'Palavra secreta incorreta. Tente novamente.';
    }
});
