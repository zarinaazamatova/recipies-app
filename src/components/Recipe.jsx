import {TabPanel, TabList, TabContext} from '@mui/lab'
import {alertClasses, CardMedia, Grid, Tab} from '@mui/material'
import { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { RecipiesContext } from '../context/GeneralContext'
import '../App.css'
import DrawerMenu from "../components/Drawer";


function Recipe(){
    const [value,setValue] = useState('1')
    const {recipe} = useParams()
    
    const {allRecipies} = useContext(RecipiesContext)
    const data = allRecipies.filter(el => el.recipe.label === recipe)
     console.log(data) 
    const handleChange=(event, newValue)=>{
        setValue(newValue)
    }
    
    return(
        
        <div className='main'>
            <DrawerMenu/>
      <Grid container spacing={2}>
          <Grid item xs={12} md={6}>left</Grid>
          <h1>{recipe}</h1>
          <div className='left'>
          <CardMedia component ='img' className='food-img' image ={data[0].recipe.image}/>
          </div>
          <Grid item xs={12} md={6}>
              <TabContext value={value}>
                  <TabList onChange={handleChange} aria-label ="description">
                      <Tab label='Ingredients' value ='1'></Tab>
                      <Tab label='Nutricional Value' value ='2'></Tab>
                      <Tab label='Something' value ='3'></Tab>
                  </TabList>
                  <TabPanel value='1'>Panel 1{/* {data[0].recipe.ingredients} */}</TabPanel>
                  <TabPanel value='2'>Panel 2</TabPanel>
                  <TabPanel value='3'>Panel 3</TabPanel>
              </TabContext>
          </Grid>
      </Grid>
      </div>
    )
}
export default Recipe