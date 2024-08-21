type PropTypes = {
  onSignIn: () => void;
};

const LoginButton: React.FC<PropTypes> = ({ onSignIn: login }) => {
  return <button onClick={() => login}>Log In</button>;
};

export default LoginButton;
