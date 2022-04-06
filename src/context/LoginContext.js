import { createContext, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getUser, logout } from '../services/fetchauth';

const LoginContext = createContext();

const LogProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(getUser());
  const history = useHistory('');
  const handleLogout = async () => {
    await logout();
    setCurrentUser('');
  };

  return (
    <LoginContext.Provider value={{ history, loading, setLoading, currentUser, setCurrentUser, handleLogout }}>{children}</LoginContext.Provider>
  );
};

const useLoginContext = () => {
  const data = useContext(LoginContext);

  if (data === undefined) {
    // throw new Error('This is an error you fool!');
  }
  return data;
};

export { LogProvider, useLoginContext };

