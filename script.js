// "Zum Anfang"  Button Funktionalität
var backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block"; // Button anzeigen
    } else {
        backToTopBtn.style.display = "none"; // Button verstecken
    }
}

function topFunction() {
    document.body.scrollTop = 0; // Für Safari
    document.documentElement.scrollTop = 0; // Für Chrome, Firefox, Edge und Opera
}

// Wartet, bis das DOM vollständig geladen ist
document.addEventListener('DOMContentLoaded', function() {
    // Wählt alle Icons mit der Klasse 'icon-fly-in' aus
    const icons = document.querySelectorAll('.icon-fly-in');
   
    // Verzögert die Hinzufügung der Klasse um 300ms
    setTimeout(function() {
                icons.forEach(function(icon) {
            icon.classList.add('icon-visible');
        });
    }, 300);
});
