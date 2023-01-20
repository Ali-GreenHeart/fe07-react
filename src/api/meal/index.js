import axios from "axios"

const URL = `https://www.themealdb.com/api/json/v1/1/random.php`

export const fetchMeal = async (setMeal) => {
    const { data } = await axios.get(URL)
    console.log(data)
    setMeal(data.meals[0])
}

