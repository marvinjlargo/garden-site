function decodeCredential(encoded) {
    return atob(encoded);
}

function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if(username === decodeCredential(encodedCredentials.username) && 
       password === decodeCredential(encodedCredentials.password)) {
        document.getElementById('loginForm').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('content').style.display = 'block';
            setTimeout(() => {
                document.getElementById('content').style.opacity = '1';
                animateElements();
                startSlideshow();
                showMessage();
            }, 50);
        }, 500);
    } else {
        alert("Ups, parece que hay un error. ¿Podrías intentarlo de nuevo?");
    }
}

function showMessage() {
    var messages = [
        "Tu sonrisa ilumina hasta los días más nublados.",
        "Cada día es mejor al saber que estás en él.",
        "Tu determinación es una inspiración constante.",
        "Admiro cómo persigues tus sueños sin rendirte.",
        "Espero que este mes te traiga muchas alegrías.",
        "Tu pasión por lo que haces es contagiosa.",
        "Siempre es un buen momento para desearte lo mejor.",
        "Eres un ejemplo de esfuerzo y dedicación.",
        "Cada meta que alcanzas es motivo de celebración.",
        "Eres alguien muy especial."
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

function startSlideshow() {
    const imageContainer = document.querySelector('.image-container img');
    const images = [
        'images/image-1.jpg',
        'images/image-2.JPG',
        'images/image-3.jpg',
        'images/image-4.jpg',
        // Agrega aquí el resto de las imágenes en el folder 'images'
    ];
    let currentImageIndex = 0;

    setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        imageContainer.src = images[currentImageIndex];
    }, 2000);
}

document.addEventListener('touchstart', function(event) {
    if (event.target.tagName === 'INPUT') {
        event.target.style.fontSize = '16px';
    }
}, false);
