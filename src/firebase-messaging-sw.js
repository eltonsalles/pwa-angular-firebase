importScripts('https://www.gstatic.com/firebasejs/5.0.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.0.4/firebase-messaging.js');

firebase.initializeApp({
  messagingSenderId: '712616041770'
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  return self.registration.showNotification({}, {});
});
