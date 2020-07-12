import { ThemeContext, themes } from "context/ThemeContext";
import { useState, useContext, useMemo } from "react";

const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState(themes.dark);

    const toggleTheme = () => {
        setTheme(theme === themes.dark ? themes.light : themes.dark);
    }

    const themeApi = useMemo(() => {
        return {
            theme,
            toggleTheme
        }
    }, [theme, toggleTheme]);

    return (
        <ThemeContext.Provider value={themeApi}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;