import axios from "axios"
import { useEffect } from "react"
import { useReducer } from "react"

const reducer = (state, action) => {
    switch (action.type) {
        case 'GetBreeds':
            return action.payload
        case 'RemoveElement':
            return state.filter((cat) => cat.breed !== action.payload)
        default:
            return state;
    }
}

const CatBreeds = ({ }) => {
    const [breeds, dispatch] = useReducer(reducer, [])

    useEffect(() => {
        axios.get('https://catfact.ninja/breeds?limit=99').then(({ data }) => {
            dispatch({ type: 'GetBreeds', payload: data.data })
        })
    }, [])

    return (
        <>
            {
                breeds.map(({ breed, coat, country, origin, pattern }) => {
                    return <div
                        onClick={() => {
                            dispatch({ type: 'RemoveElement', payload: breed })
                        }}
                        key={breed} style={{ border: '2px solid', padding: 10, margin: 10 }}>
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
