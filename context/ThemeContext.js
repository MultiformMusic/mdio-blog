import React from 'react';

export const themes = {
    light: {
        type: 'light',
        fontColor: '#2b2C38',
        background: '#F4F7F9'
    },
    dark: {
        type: 'dark',
        fontColor: '#dcdcdc',
        background: '#4D4C58'
    }
}

export const ThemeContext = React.createContext({});