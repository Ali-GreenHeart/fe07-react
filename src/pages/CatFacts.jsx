import axios from "axios"
import PageContainer from "components/PageContainer"
import { useReducer } from "react"
import { useEffect, useState } from "react"
import CatFactsReducer from "reducers/CatFactsReducer"

const url = 'https://catfact.ninja/facts?max_length=60'

const CatFacts = () => {

    const [facts, dispatch] = useReducer(CatFactsReducer, [])

    useEffect(() => {
        axios.get(url)
            .then(({ data }) => {
                console.log(data.data)
                dispatch({ type: 'GetFacts', payload: data.data })
            })
    }, [])

    const removeFact = (fact) => {
        dispatch({ type: 'RemoveFact', payload: fact })
    }

    return (
        <PageContainer>
            {
                facts.map(({ fact }) => {
                    return <p key={fact}>{fact} <button onClick={() => removeFact(fact)}>x</button>  </p>
                })
            }
        </PageContainer>
    )
}
export default CatFacts
