function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if(username === "hermosa" && password === "empresaria") {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('content').style.display = 'block';
        showMessage();
    } else {
        alert("Ups, parece que hay un error. ¿Podrías intentarlo de nuevo?");
    }
}

function showMessage() {
    var messages = [
        "Recuerdo tu sonrisa, aunque estés lejos.",
        "Eres la melodía que recuerdo en las tardes.",
        "Tu éxito es mi inspiración diaria.",
        "Cada logro tuyo es una razón más para admirarte.",
        "La distancia solo hace que mi cariño por ti crezca más."
    ];
    var randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage);
}