import { createContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const lightTheme = {
  backgroundHeader: " #ffffff",
  headerLoginName: "#565EEF",
  headerSetMail: "#94a6be",
  headerUserSet: "#000",
  headerCheckbox: "#94a6be",
  backgroundMainPage: "#eaeef6",
  backgroundCard: "#FFFFFF",
};
const darkTheme = {
  backgroundHeader: "#20202C",
  headerLoginName: "#FFFFFF",
  headerSetMail: "#FFF",
  headerUserSet: "#FFF",
  headerCheckbox: "#565EEF",
  backgroundMainPage: "#000",
  backgroundCard: "#20202C",
};

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const theme = isDarkTheme ? darkTheme : lightTheme;
  function toggleTheme() {
    setIsDarkTheme((prev) => !prev);
  }
  const value = {
    isDarkTheme,
    toggleTheme,
  };
  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
