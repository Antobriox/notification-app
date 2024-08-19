self.addEventListener('push', function(event) {
    const options = {
        body: event.data ? event.data.text() : '¡Mensaje sin datos!',
        icon: 'icon.png',
        vibrate: [200, 100, 200],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        }
    };
    event.waitUntil(
        self.registration.showNotification('Notificación Push', options)
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('https://www.tu-sitio-web.com')
    );
});

