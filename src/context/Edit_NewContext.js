import { createContext, useContext, useState } from 'react';

const DogStats = createContext();

const DogProvider = ({ children }) => {

  const [loading, setLoading] = useState(true);
 

  return ( 
    <DogProvider.Provider value={{ loading, setLoading }}>{children}</DogProvider.Provider>
  );
};

const useDogContext = () => {
  const data = useContext(DogStats);
  
  if (data === undefined) {
      // throw new Error('edit_newDogContext');
  }
  return data;
};
  
export { DogProvider, useDogContext };