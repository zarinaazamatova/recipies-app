import React from "react";
import Recepies from "../components/Recipies";
import Form from "../components/Form";
import DrawerMenu from "../components/Drawer";

function Home(){
    return(
        <>
        <DrawerMenu/>
        <Form/>
        <Recepies/>
        </>
    )
}
export default Home