import { createContext, useState } from "react"


export const AlertContext = createContext()

function AlertContextComponent({ children }) {
    const [alert, setAlert] = useState({
        show: false,
        message: 'for test',
        type: 'success' // error, warning
    })

    const showAlert = ({ message, type }) => {
        setAlert({
            show: true,
            message,
            type
        })
        setTimeout(() => {
            setAlert((pre) => ({ ...pre, show: false }))
        }, 1000);
    }

    return (
        <AlertContext.Provider value={showAlert}>
            {
                alert.show &&
                <div style={{
                    position: 'fixed',
                    width: 200,
                    top: 10,
                    right: 10,
                    height: 60,
                    backgroundColor: alert.type === 'success' ? 'green' : 'red'
                }}>
                    {alert.message}
                </div>
            }
            {children}
        </AlertContext.Provider>
    )
}
export default AlertContextComponent;
