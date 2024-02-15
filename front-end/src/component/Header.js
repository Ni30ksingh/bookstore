import React, { useState } from 'react'
import {AppBar,Tab,Tabs,Typography,Toolbar} from'@mui/material';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined'
import {NavLink} from "react-router-dom"
const Header = () => {
  const [value,setvalue]=useState();
  return (
    <div><AppBar sx={{backgroundColor:"#232f30"}} position='sticky'><Toolbar>
        <Typography><LibraryBooksOutlinedIcon/></Typography>
        <Tabs sx={{ml:"auto"}} textColor="inherit" indicatorColor="secondary" value ={value}onChange={(e,val)=>setvalue(val)}>
          <Tab LinkComponent={NavLink} to="/add" label="Add product"/>
          <Tab LinkComponent={NavLink} to="/books"label="Book"/>
          <Tab LinkComponent={NavLink} to="/about"label="About us"/>
        </Tabs>
        </Toolbar>
    </AppBar>
    </div>
  )
}

export default Header