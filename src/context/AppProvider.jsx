import { ThemeContext } from "./AppContext";
import { useState, useEffect } from "react";

const AppProvider = ({ children }) => {
  const savedTheme = localStorage.getItem("theme");

  const [theme, setTheme] = useState(savedTheme || "light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, [savedTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default AppProvider;
