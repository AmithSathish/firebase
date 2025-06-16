// Import Firebase scripts
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBft-gNIyLnndOuuLAsGzG9JX0LR0gccAE",
  authDomain: "fir-project-4dc01.firebaseapp.com",
  projectId: "fir-project-4dc01",
  storageBucket: "fir-project-4dc01.firebasestorage.app",
  messagingSenderId: "931409009221",
  appId: "1:931409009221:web:86f710a36020385541a12c",
  measurementId: "G-9XBGEB3GKQ"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message:', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon-192x192.png',
    badge: '/icon-192x192.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});