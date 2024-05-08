import { Snackbar, Alert } from '@mui/material';
import { useState, useEffect } from 'react';
import { useSquid } from '@squidcloud/react';
import { useIdToken } from 'react-firebase-hooks/auth';
// import { getIdToken, getIdTokenResult } from 'firebase/auth';
import { auth } from './firebase.ts';
import './App.css';
import NavBar from './components/nav-bar.tsx';

function App() {
  // Set state of toast message
  const [toastOpen, setToastOpen] = useState(false);
  const [loginMessage, setLoginMessage] = useState('');

  // Get Firebase Authentication state
  const [user, loading, error] = useIdToken(auth);
  const { setAuthProvider } = useSquid();

  useEffect(() => {
    // Send the Firebase token to the Squid backend
    setAuthProvider({
      integrationId: 'firebase-auth',
      getToken: async () => {
        if (!user) return undefined;
        return user.getIdToken(true);
      },
    });
    if (loading) return;
    if (!user) {
      setLoginMessage('You are logged out!');
      setToastOpen(true);
    } else {
      setLoginMessage('You are logged in!');
      setToastOpen(true);
    }
  }, [user, loading, setAuthProvider]);

  const handleToClose = () => {
    setToastOpen(false);
  };
  return (
    <>
      <NavBar isAuthenticated={!!user}></NavBar>
      <div>{user?.email}</div>
      <Snackbar
        open={toastOpen}
        onClose={handleToClose}
        autoHideDuration={6000}
      >
        <Alert severity='success'>{loginMessage}</Alert>
      </Snackbar>
      (error && {error})
    </>
  );
}

export default App;
