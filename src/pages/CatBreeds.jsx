import axios from "axios"
import { useRef } from "react"
import { useEffect } from "react"
import { useReducer } from "react"

const reducer = (state, action) => {
    switch (action.type) {
        case 'GetBreeds':
            return action.payload
        case 'RemoveElement':
            return state.filter((cat) => cat.breed !== action.payload)
        case "FilterElementByCountry":
            return state.filter((cat) => cat.country.startsWith(action.payload))
        default:
            return state;
    }
}

const CatBreeds = ({ }) => {
    const [breeds, dispatch] = useReducer(reducer, [])
    let inputRef = useRef();
    useEffect(() => {
        axios.get('https://catfact.ninja/breeds?limit=99').then(({ data }) => {
            dispatch({ type: 'GetBreeds', payload: data.data })
        })
    }, [])

    useEffect(() => {
        if (breeds.length === 0) {
            axios.get('https://catfact.ninja/breeds?limit=99').then(({ data }) => {
                dispatch({ type: 'GetBreeds', payload: data.data })
            })
            inputRef.current.value = ''
        }
    }, [breeds])


    return (
        <>

            <input
                ref={inputRef}
                onChange={(e) => {
                    dispatch({ type: 'FilterElementByCountry', payload: e.target.value })
                    if (!e.target.value) {
                        axios.get('https://catfact.ninja/breeds?limit=99').then(({ data }) => {
                            dispatch({ type: 'GetBreeds', payload: data.data })
                        })
                    }
                }}
                type="text" style={{ display: 'block', width: '400px', margin: "20px auto", outline: 'none', fontSize: 32 }} />

            {
                breeds.map(({ breed, coat, country, origin, pattern }) => {
                    return <div
                        key={breed} style={{ border: '2px solid', padding: 10, margin: "10px auto", maxWidth: 300, textAlign: 'center' }}>
                        <button onClick={() => {
                            dispatch({ type: 'RemoveElement', payload: breed })
                        }} style={{ float: 'right' }}>x</button>
                        <h1>{breed}</h1>
                        <h2>{country}</h2>
                        <p>{coat}</p>
                        <p>{origin}</p>
                        <p>{pattern}</p>
                    </div>
                })
            }

        </>
    )
}
export default CatBreeds
