import React, { createContext, useState, useContext } from 'react'
import { bright } from '../../../assets/themes'

const defaultTheme = bright;
const ThemeContext = createContext(defaultTheme);

type Props = {
    children: React.ReactNode
  };

export const ThemeProvider = ({ children }: Props) => {
    const [theme, setTheme] = useState(defaultTheme);
    
    // theme hardcoded for now, eventually put a useEffect hook in here
    // to fetch theme from users settings or something
  
    return (
      <ThemeContext.Provider value={theme}>
        {children}
      </ThemeContext.Provider>
    );
};

export const useThemeContext = () => useContext(ThemeContext)