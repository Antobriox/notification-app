// firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging.js');

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAmW9nWl5iFUvD95IRA9N466LduvmvRzqw",
    authDomain: "notificacio-web.firebaseapp.com",
    projectId: "notificacio-web",
    storageBucket: "notificacio-web.appspot.com",
    messagingSenderId: "228034334767",
    appId: "1:228034334767:web:68ec8986acd8baf648f6da",
    measurementId: "G-P41YX7WHGC"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Maneja mensajes en segundo plano
messaging.onBackgroundMessage((payload) => {
    console.log('Mensaje recibido en segundo plano', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
