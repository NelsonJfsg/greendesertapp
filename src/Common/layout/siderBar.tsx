import { Category, Work, Google, Hail, Inventory, LocalShipping, Menu, MenuBook, Person, TurnedInNot, WindowSharp } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { Link, redirect } from "react-router-dom";
import { EmployeeRoutes } from "../../Routers/EmployeeRoutes";
import { useNavigate } from 'react-router-dom';
import { Directory } from "../dictionary/routeDirectory";


const redirectPage = (link : string) => {
  window.location.href = link;
}

export const SideBar = ({drawerWidth = 340}) => {

  let options = ['Inventario', 'Clientes', 'Empleados', 'Proveedores'];
  let descriptions = ['asd','b','c','d'];
  const navigate = useNavigate()


  return (

    <Box
      component='nav'
      sx={{ width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: {xs: 'block'},
          '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
        }}
      >
        <Toolbar >
          
          <Grid container
            direction='row'
            justifyContent='space-between'
            alignItems='center'
          
          >
          <Typography variant="h6" noWrap component='div'>Menu</Typography>
          
          <IconButton>
            <Menu/>
          </IconButton>
          </Grid>

          
        </Toolbar>
        
        <Divider/>
        <List>
            {
              <ListItem key={'a'} disablePadding>  
                
                <Grid width='100%'>

                  <ListItemButton onClick={() => {}}>
                    <ListItem>
                      <Person/>
                      <ListItemText primary = {'Empleados'}/>
                    </ListItem>
                  </ListItemButton>

                  
                  <ListItemButton onClick={() => {redirectPage(Directory.addEmployee)}}>
                    <ListItem sx={{ml: 2}}>
                      <Person/>
                      <ListItemText secondary = {'Agregar empleados'}/>
                    </ListItem>
                  </ListItemButton>

                  <ListItemButton onClick={() => {redirectPage(Directory.reviewEmployee);}}>
                    <ListItem sx={{ml: 2}}>
                      <Person/>
                      <ListItemText secondary = {'Visualizar empleados'}/>
                    </ListItem>
                  </ListItemButton>

                  <ListItemButton onClick={() => {alert('jalamos al 100')}}>
                    <ListItem>
                      <Hail/>
                      <ListItemText primary = {'Clientes'}/>
                    </ListItem>                    
                  </ListItemButton>

                  
                  <ListItemButton onClick={() => {redirectPage(Directory.addCustomer)}}>
                    <ListItem sx={{ml: 2}}>
                      <Hail/>
                      <ListItemText secondary = {'Agregar cliente'}/>
                    </ListItem>
                  </ListItemButton>

                  <ListItemButton onClick={() => {redirectPage(Directory.reviewCustomer)}}>
                    <ListItem sx={{ml: 2}}>
                      <Hail/>
                      <ListItemText secondary = {'Visualizar clientes'}/>
                    </ListItem>  
                  </ListItemButton>

                  <ListItemButton onClick={() => {}}>
                    <ListItem>
                      <Inventory/>
                      <ListItemText primary = {'Inventario'}/>
                    </ListItem>
                  </ListItemButton>

                  

                  <ListItemButton onClick={() => {Directory.reviewInventory}}>
                    <ListItem sx={{ml: 2}}>
                      <Inventory/>
                      <ListItemText secondary = {'Visualizar inventario'}/>
                    </ListItem>
                  </ListItemButton>
                  
                  <ListItemButton onClick={() => {}}>
                    <ListItem>
                      <LocalShipping/>
                      <ListItemText primary = {'Provedores'}/>
                    </ListItem>
                  </ListItemButton>

                  <ListItemButton onClick={() => {redirectPage(Directory.addProvider)}}>
                    <ListItem sx={{ml: 2}}>
                      <LocalShipping/>
                      <ListItemText secondary = {'Agregar proveedor'}/>
                    </ListItem>
                  </ListItemButton>

                  <ListItemButton onClick={() => {redirectPage(Directory.reviewProveedores)}}>
                    <ListItem sx={{ml: 2}}>
                      <LocalShipping/>
                      <ListItemText secondary = {'Visualizar provedores'}/>
                    </ListItem>
                  </ListItemButton>
                  
                  <ListItemButton onClick={() => {}}>
                    <ListItem>
                      <Category/>
                      <ListItemText primary = {'Productos'}/>
                    </ListItem>
                  </ListItemButton>

                  <ListItemButton onClick={() => {redirectPage(Directory.reviewProduct)}}>
                    <ListItem sx={{ml: 2}}>
                      <Category/>
                      <ListItemText secondary = {'Visualizar productos'}/>
                    </ListItem>
                  </ListItemButton>

                  <ListItemButton onClick={() => {}}>
                    <ListItem>
                      <Work/>
                      <ListItemText primary = {'Orden de trabajo'}/>
                    </ListItem>
                  </ListItemButton>

                  <ListItemButton onClick={() => {redirectPage(Directory.addjoborder)}}>
                    <ListItem sx={{ml: 2}}>
                      <Work/>
                      <ListItemText secondary = {'Agregar orden de trabajo'}/>
                    </ListItem>
                  </ListItemButton>

                  <ListItemButton onClick={() => {redirectPage(Directory.reviewJoborder)}}>
                    <ListItem sx={{ml: 2}}>
                      <Work/>
                      <ListItemText secondary = {'Visualizar orden de trabajo'}/>
                    </ListItem>
                  </ListItemButton>

                    
                </Grid>

              </ListItem>
            }
          </List>
      </Drawer>
    </Box>
  )

}
