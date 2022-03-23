import { createContext, useState,useEffect } from "react";
import axios from "axios";
export const RecipiesContext = createContext([])

export const GeneralProvider = ({children})=>{
    const [allRecipies, setAllRecipies] = useState([])
    const [recipeToSearch, setRecipeToSearch] = useState('chiken')
   
    const CallToApi = async()=>{
        const req = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${recipeToSearch}&app_id=978a5141&app_key=dd9e2f84274f8255f4b09db34d8a377b`)
        setAllRecipies(req.data.hits)
       // console.log(req.data.hits)
    }
    
    useEffect(()=>{
        console.log('Im calling API')
        CallToApi()
    }, [recipeToSearch])

    const data ={
        allRecipies:allRecipies,
        recipeToSearch:recipeToSearch,
        setRecipeToSearch:setRecipeToSearch
    }

    return (
        <RecipiesContext.Provider value ={data}>

            {children}
        </RecipiesContext.Provider>
    )
}

//export default 