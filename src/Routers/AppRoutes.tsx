import { Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import { Children } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import {HomePage} from '../pages/Home/HomePage'

import {Navbar, SideBar}  from '../Common/layout';
import { Index } from '../pages/presentation';
import { Toldbar } from '../Common/layout/toldbar';

export const AppRoutes = () => {
  return (

    
    <Box sx={{display: 'flex'}}>

      <Box component='main' sx={{flexGrow: 1, p: 3}}>

      <Toldbar/>

      <div>-</div>

      <Routes>
        <Route path='/welcome' element={<Index/>}/>

        <Route path='/*' element={<Navigate to='welcome'/>}/>
      </Routes>

      </Box>

    </Box>




      



  )
}
