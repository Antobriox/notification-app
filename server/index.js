const admin = require('firebase-admin');
const express = require('express');
const bodyParser = require('body-parser');

// Inicializa Express
const app = express();
app.use(bodyParser.json());

// Carga las credenciales de Firebase
const serviceAccount = require('./path/to/your-service-account-file.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://notificacio-web.firebaseio.com"
});

// Instancia de Firebase Messaging
const messaging = admin.messaging();

// Endpoint para enviar notificaciones
app.post('/sendNotification', (req, res) => {
    const token = req.body.token;
    const message = {
        notification: {
            title: 'Título de la Notificación',
            body: 'Este es el cuerpo de la notificación'
        },
        token: token
    };

    messaging.send(message)
    .then((response) => {
        console.log('Mensaje enviado exitosamente:', response);
        res.status(200).send('Notificación enviada');
    })
    .catch((error) => {
        console.error('Error enviando el mensaje:', error);
        res.status(500).send('Error enviando la notificación');
    });
});

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
