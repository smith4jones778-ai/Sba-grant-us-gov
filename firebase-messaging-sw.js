importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyB4DMYZJHWgbRUZV-uamOy7TpxLM1sGYPY",
  authDomain: "chats-afcff.firebaseapp.com",
  projectId: "chats-afcff",
  messagingSenderId: "764250889947",
  appId: "1:764250889947:web:2c843497ce389edf5876fe"
});
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(payload => {
  const title = payload.notification.title;
  const options = {
    body: payload.notification.body,
    icon: "https://cdn-icons-png.flaticon.com/512/2950/2950176.png"
  };
  return self.registration.showNotification(title, options);
});