import { createContext, useContext, useState } from 'react';
import { getUser, logout } from '../services/fetchauth';

const LoginContext = createContext();

const LogProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(getUser());
  

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [bio, setBio] = useState('');
  const [breed, setBreed] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState('');


  const handleLogout = async () => {
    await logout();
    setCurrentUser('');
  };

//   return (
//     <LoginContext.Provider value={{ history, loading, setLoading, currentUser, setCurrentUser, handleLogout }}>{children}</LoginContext.Provider>
//   );
// };

  return (
    <LoginContext.Provider value={{ error, setError, age, setAge, bio, setBio, breed, setBreed, image, setImage, name, setName, loading, setLoading, currentUser, setCurrentUser, handleLogout }}>{children}</LoginContext.Provider>
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

