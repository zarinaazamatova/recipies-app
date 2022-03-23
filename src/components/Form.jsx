import {TextField, Grid, FormControl, Box} from '@mui/material'
import { debounce } from 'lodash'
import { useContext } from 'react'
import {RecipiesContext} from '../context/GeneralContext'


function Form(){
    const {setRecipeToSearch, recipeToSearch} = useContext(RecipiesContext)

    const handlerWithDebounce = debounce((value)=>{
        setRecipeToSearch(value)
    }, 500)
    return(
        <Grid container spacing={2}>
            <Grid item xs={1} md={3}></Grid>
                
            <Grid item xs={10} md={6}>
                <Box sx ={{m:'2rem'}}>
                    <FormControl fullWidth>
                        <TextField type ="text" onChange = {(e)=>handlerWithDebounce(e.target.value)} />
                    </FormControl>
                </Box>
            </Grid>

            <Grid item xs={1} md={3}></Grid>
        </Grid>
    )
}

export default Form