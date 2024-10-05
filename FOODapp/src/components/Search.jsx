import { useEffect, useState } from "react"
import styles from "../css/search.module.css" ;


const URL = "https://api.spoonacular.com/recipes/complexSearch" ;
const API_KEY = "4367444a924d4f5baa50aea53cde8d85" ;


export default function Search({foodData , setFoodData})
{
    const [query , setQuery] = useState("pizza")
    useEffect(() =>{
       async function fetchFood()
        {
        const res =await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
        const data =await res.json()
        console.log(data.results) ;
        setFoodData(data.results)
        }
        fetchFood()
    }, [query])
    return (
        <div className={styles.searchContainer}>
            <input className={styles.input}
            onChange={(e) =>setQuery(e.target.value)} type="text" />
        </div>
    )
}