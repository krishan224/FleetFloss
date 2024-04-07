import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
//import {getDatabase, ref, set} from "firebase/database"

// Initialize Firebase with your configuration details
const firebaseConfig = {
  apiKey: "AIzaSyDF6Wv2Ziao6zNuU5bp3qXV1liWE_P3_Ng",
  authDomain: "fleetfut-d2955.firebaseapp.com",
  projectId: "fleetfut-d2955",
  storageBucket: "fleetfut-d2955.appspot.com",
  messagingSenderId: "864769442304",
  appId: "1:864769442304:web:8b4127da8b0aeccee10ee5",
  measurementId: "G-Y6CSM4P6NS",
  databaseURL:"https://fleetfut-d2955-default-rtdb.firebaseio.com"
};
firebase.initializeApp(firebaseConfig);

// Create a Firebase Cloud Firestore instance
const db = firebase.firestore();

// Set up Firebase phone number authentication
const auth = firebase.auth();
const phoneAuthProvider = new firebase.auth.PhoneAuthProvider();

export { db, auth, phoneAuthProvider };

// Define a component or module and export the handleSubmit function
const handleSubmits = (e, name, email, phoneNumber, subject, message) => {
  e.preventDefault();
  phoneAuthProvider.verifyPhoneNumber(
    `+91${phoneNumber}`,
    {
      // options for the verification message
      // see Firebase docs for more info
    },
    (verificationId) => {
      // verification code sent to user's phone
      const code = window.prompt('Enter verification code');
      const credential = firebase.auth.PhoneAuthProvider.credential(
        verificationId,
        code
      );
      auth.signInWithCredential(credential)
        .then((userCredential) => {
          // user is authenticated, save message to Firestore
          db.collection('messages').add({
            name: name,
            email: userCredential.user.email,
            phone: phoneNumber,
            subject: subject,
            message: message,
          })
          .then(() => {
            alert('Message sent successfully!');
            // Reset input fields after message is sent
            name('');
            userCredential('');
            phoneNumber('');
            subject('');
            message('');
          })
          .catch((error) => {
            console.error('Error sending message: ', error);
          });
        })
        .catch((error) => {
          console.error('Error authenticating user: ', error);
        });
    },
    (error) => {
      console.error('Error sending verification code: ', error);
    }
  );
};

export default handleSubmits;
