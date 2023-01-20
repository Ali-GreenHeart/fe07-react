import { useEffect, useState } from "react"
import styles from "./index.module.css"
import { fetchMeal } from 'api/meal'


const Yummie = ({ }) => {
    const [meal, setMeal] = useState({})

    useEffect(() => {
        fetchMeal(setMeal)
    }, [])

    return (
        <>
            <h1 className={styles.heading}>Welcome to canteen!</h1>
            {
                Object.keys(meal).length > 0 && <>
                    <p>Name: {meal.strMeal}</p>
                    <p>Origin country: {meal.strArea}</p>
                    <p>Meal category: {meal.strCategory}</p>
                    <a target="_blank" href={`${meal.strYoutube}`}>go on youtube</a>
                    <img className={styles.img} src={meal.strMealThumb} alt={`${meal.strMeal}`} />
                </>
            }
        </>
    )
}
export default Yummie
