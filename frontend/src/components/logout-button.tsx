type PropTypes = {
  onSignOut: () => void;
};

const LogoutButton: React.FC<PropTypes> = ({ onSignOut }) => {
  return <button onClick={onSignOut}>Log Out</button>;
};

export default LogoutButton;
