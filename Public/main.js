 // Verifica si el navegador soporta service workers y notificaciones
if ('serviceWorker' in navigator && 'Notification' in window) {
    navigator.serviceWorker.register('service-worker.js')
    .then(function(registration) {
        console.log('Service Worker registrado con éxito:', registration);
    })
    .catch(function(error) {
        console.log('Error al registrar el Service Worker:', error);
    });

    document.getElementById('enable-notifications').addEventListener('click', function() {
        Notification.requestPermission().then(function(permission) {
            if (permission === 'granted') {
                showNotification();
            }
        });
    });
}

function showNotification() {
    if (Notification.permission === 'granted') {
        navigator.serviceWorker.getRegistration().then(function(registration) {
            registration.showNotification('¡Hola!', {
                body: 'Gracias por habilitar las notificaciones push!',
                icon: 'icon.png',
                vibrate: [200, 100, 200],
                tag: 'vibration-sample'
            });
        });
    }
}

