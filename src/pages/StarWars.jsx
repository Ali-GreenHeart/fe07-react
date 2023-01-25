import axios from "axios"
import PageContainer from "components/PageContainer"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router"

const StarWars = ({ }) => {
    const [description, setDescription] = useState("")
    const { peopleId } = useParams()

    useEffect(() => {
        async function getData() {
            const { data } = await axios.get(`https://www.swapi.tech/api/people/${peopleId}`)
            setDescription(data.result.description)
        }
        getData()
    }, [])

    return (
        <PageContainer>
            <div>{description}</div>
        </PageContainer>
    )
}
export default StarWars
