import { Card, CardHeader, CardContent, Divider, Typography, Grid, Button, Box, CardMedia } from '@mui/material'
import {useContext} from 'react'
import { RecipiesContext } from '../context/GeneralContext'
import { Link } from 'react-router-dom'
import {useParams} from 'react-router-dom'

function Recepies(){
    const {id,product} = useParams()
    const styleHeader={
        height:50
    }
    const {allRecipies} = useContext(RecipiesContext)

    return(
        <>
        <h1>This my recipies</h1>
        <Grid container spacing={2} style={styleHeader}>
            {
                allRecipies.map((recipe)=>(
                    <Grid item xs={6} md={3}>
                        <Card>
                            <CardHeader id = {recipe.recipe.yield} title={recipe.recipe.label}/>
                            <Divider/>
                            <CardContent>
                                <CardMedia component ='img' image={recipe.recipe.image}/>
                            </CardContent>
                        
                        </Card>
                        <Button><Link to={`/Recipe/${recipe.recipe.label}`}>See more</Link></Button>
                        </Grid>
                ))
            }
        </Grid>
        </>
    )
}

export default Recepies;