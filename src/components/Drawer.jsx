import { Drawer, List, ListItem, ListItemText, Button } from '@mui/material'
import {useState} from 'react'
import {Link} from 'react-router-dom'

function DrawerMenu(){
    const [drawerOpen, setDrawerOpen] = useState(false)
    return(
    <>
    <Drawer open={drawerOpen} onClose={()=>setDrawerOpen(false)} anchor ='rigth'>
        <List>
            <ListItem>
                <ListItemText>
                   Home
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                   Recipe
                </ListItemText>
            </ListItem>
         
        </List>
    </Drawer>
    <Button onClick={()=> setDrawerOpen(!drawerOpen)}>Show Menu</Button>
    </>
    )
}

export default DrawerMenu;