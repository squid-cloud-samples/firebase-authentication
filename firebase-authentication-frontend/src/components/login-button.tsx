import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.js';

const LoginButton = () => {
  const loginWithRedirect = () => {
    signInWithEmailAndPassword(auth, 'test@test.test', 'password');
  };

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;
