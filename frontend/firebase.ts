// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for other Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'YOUR_FIREBASE_API-KEY',
  authDomain: 'YOUR_FIREBASE_PROJECT_ID.firebaseapp.com',
  projectId: 'YOUR_FIREBASE_PROJECT_ID',
  appId: 'YOUR_FIREBASE_APP_ID',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export default firebaseApp;
