function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if(username === "hermosa" && password === "empresaria") {
        document.getElementById('loginForm').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('content').style.display = 'block';
            setTimeout(() => {
                document.getElementById('content').style.opacity = '1';
            }, 50);
        }, 500);
        showMessage();
    } else {
        alert("Ups, parece que hay un error. ¿Podrías intentarlo de nuevo?");
    }
}

function showMessage() {
    var messages = [
        "Recuerdo tu sonrisa, aunque estés lejos.",
        "Eres la melodía que recuerdo en las tardes.",
        "Tu éxito me inspira diariamente.",
        "Cada logro tuyo es una razón más para admirarte.",
        "La distancia solo hace que mi cariño por ti crezca."
    ];
    var randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setTimeout(() => {
        alert(randomMessage);
    }, 1000);
}

function animateElements() {
    const elements = document.querySelectorAll('#content > *');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

document.getElementById('content').addEventListener('transitionend', animateElements);

document.addEventListener('touchstart', function(event) {
    if (event.target.tagName === 'INPUT') {
        event.target.style.fontSize = '16px';
    }
}, false);