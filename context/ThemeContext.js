import { useState, useEffect, createContext } from "react";

export const ThemeContext = createContext('')

export const  ContextWrapper = ({children}) => {

    const [theme, setTheme] = useState('')

    useEffect(()=>{
        const localTheme = localStorage.getItem('theme')
        if ( localTheme == 'light'){
            setLight()
        } else setDark()
    },[])

    useEffect(()=>{
        if(theme != '') localStorage.setItem('theme', theme)
    },[theme])

    const setDark = () =>{
        let root = document.querySelector(':root');
        // root.style.setProperty('--background', 'rgb(20,20,20)')
        root.style.setProperty('--background', 'linear-gradient(147deg, #000000 0%, #2c3e50 74%)')
        root.style.setProperty('--text', 'white')
        root.style.setProperty('--secondary', 'rgb(43, 43, 43)')
        root.style.setProperty('--button-background', 'white')
        root.style.setProperty('--button-color', 'black')
        root.style.setProperty('--fill', 'white')
        
        setTheme('dark')
    }
    
    const setLight = () => {
        let root = document.querySelector(':root');
        // root.style.setProperty('--background', 'white')
        root.style.setProperty('--background', 'linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)')
        root.style.setProperty('--text', 'black')
        root.style.setProperty('--secondary', 'rgb(200,200,200)')
        root.style.setProperty('--button-background', 'black')
        root.style.setProperty('--button-color', 'white')
        root.style.setProperty('--fill', 'black')

        setTheme('light')
    }

    const toggle = () => {
        if(theme == 'dark'){
            setLight()
        }else if(theme == 'light') setDark()
    }

    return(
        <ThemeContext.Provider value={{theme, toggle}}>
            {children}
        </ThemeContext.Provider>
    )

}