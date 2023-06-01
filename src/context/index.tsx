import { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';

interface ModeContextProps {
  type: 'sun' | 'moon';
  changeType: Function;
}

const ModeContext = createContext<ModeContextProps>({} as ModeContextProps);

export const ModeContextProvider = ({ children }: any) => {
  const [type, setType] = useState<'sun' | 'moon'>('sun');
  const colorScheme = useColorScheme();

  useEffect(() => {
    if (colorScheme === 'dark') {
      setType('moon');
    }
  }, []);

  const changeType = (typeChoose: 'sun' | 'moon') => {
    setType(typeChoose);
  };

  return (
    <ModeContext.Provider
      value={{
        type,
        changeType,
      }}
    >
      {children}
    </ModeContext.Provider>
  );
};

export const useMode = () => {
  const context = useContext(ModeContext);
  return context;
};
