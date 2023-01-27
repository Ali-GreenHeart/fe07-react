import { createContext } from "react"


// create context
export const DataContext = createContext()

const data = {
    ad: 'ali',
    age: 22,
}
function DataContextComponent({ children }) {
    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContextComponent;
