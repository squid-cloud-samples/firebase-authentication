import { signOut } from 'firebase/auth';
import { auth } from '../firebase.js';

const LogoutButton = () => {
  const logout = () => {
    signOut(auth);
  };

  return <button onClick={() => logout()}>Log Out</button>;
};

export default LogoutButton;
