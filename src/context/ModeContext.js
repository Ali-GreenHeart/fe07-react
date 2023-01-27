import { createContext, useEffect, useState } from "react"

export const ModeContext = createContext()


function ModeContextComponent({ children }) {
    const [dark, setDark] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('mode') === 'true') {
            setDark(true)
        } else {
            setDark(false)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('mode', dark)
    }, [dark])

    return <ModeContext.Provider value={[dark, setDark]}>
        <div className={dark ? 'darkmode' : null}>
            {children}
        </div>
    </ModeContext.Provider>
}

export default ModeContextComponent;
