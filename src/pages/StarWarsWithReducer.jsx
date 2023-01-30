import axios from "axios"
import PageContainer from "components/PageContainer"
import { useReducer } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"

// summarize
// kicik state-lerde -> useState
// boyuk state-lerde -> usereducer (flux architecture, [redux] )


const reducer = (state, action) => {
    switch (action.type) {
        case 'GetData':
            return action.payload;
        case 'RemoveElement':
            let newState = state.filter((elem) => elem.uid !== action.payload)
            return newState;
        case 'AddElement':
            return [...state, action.payload]
        case 'EditElement':
            return state.map((elem) => {
                if (elem.uid === action.payload.uid) {
                    return { ...elem, name: action.payload.name }
                }
                return elem;
            })
        default:
            return state;
    }
}


const StarWarsWithReducer = ({ }) => {
    const [data, dispatch] = useReducer(reducer, [])

    useEffect(() => {
        axios.get("https://www.swapi.tech/api/people").then(({ data }) => {
            const newData = data.results.map(({ uid, name }) => ({ name, uid }))
            dispatch({ type: 'GetData', payload: newData })
        })
    }, [])



    return (
        <PageContainer
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 10,
                justifyContent: 'center',
                padding: '20px 0 '
            }}
        >
            <h1>Star Wars With Reducer</h1>
            {
                data.map(({ uid, name }) => {
                    return (
                        <Link
                            key={uid}
                            // to={`/starwars/${uid}`}
                            style={{
                                display: 'block',
                                width: 160,
                                height: 200,
                                boxShadow: '0 0 10px black',
                                color: "black",
                                textDecoration: 'none',
                                textAlign: "center",
                                borderRadius: 10

                            }}>
                            <h1>{name}</h1>
                            <p>{uid}</p>
                            <button
                                onClick={() => {
                                    dispatch({ type: 'RemoveElement', payload: uid })
                                }}
                            >X</button>
                            <button
                                onClick={() => {
                                    let name = prompt('adini deyis')
                                    dispatch({ type: 'EditElement', payload: { name, uid } })
                                }}
                            >✒</button>
                        </Link>
                    )
                })
            }
            <button
                onClick={() => {
                    let name = prompt('enter your name')
                    let uid = prompt('enter your uid')
                    let newobj = {
                        name,
                        uid
                    }
                    dispatch({ type: 'AddElement', payload: newobj })
                }}
            >add Element</button>
        </PageContainer>
    )
}
export default StarWarsWithReducer
    /*
e-commerce

mehsullar : 
1. secmek
2. silmek
3. elave etmek
4. favorite etmek
5. sebete elave etmek 

state -> deyisilmez bir state-dir. 
view -> ui
action -> userin ui-dan etdiyi hereket
dispatch -> action-a uygun funksiyanin state-i deyismesi. 
*/
