import { createContext , useState} from 'react'

export const LocalisationContext = createContext('fr')

export const LocalisationProvider = ({ children : React.Node }) => {
    const [locale, setLocale] = useState('fr')
    const toggleLocale = () => {
        setLocale(locale === 'fr' ? 'eng' : 'fr')
    }
 
    return (
       <LocalisationContext.Provider value={{ theme, toggleTheme }}>
          {children}
       </LocalisationContext.Provider>
    )
 }