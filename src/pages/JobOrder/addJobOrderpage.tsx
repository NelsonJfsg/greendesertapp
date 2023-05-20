import { Person } from '@mui/icons-material'
import { Button, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField, Typography } from '@mui/material'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { json, useNavigate } from 'react-router-dom'
import { employeeModel } from '../../assets/models/employee.model'
import axios from 'axios'
import * as yup from 'yup'
import { useFormik } from 'formik'
import Swal from 'sweetalert2'
import { IProvider } from '../../assets/models/provider.model'
import { Ijobordermodel } from '../../assets/models/joborder.model'
import { uuid } from '../../services/auth/AuthRouter'

export const AddJobOrderpage = () => {
  // const auth = getAuth()
  const [disable, setDisable] = useState(true)
  // const [uuid, setuuid] = useState<any>()
  // const [loading, setLoading] = useState(false)
  const [user2, setUser2] = useState<any>({})


  //   useEffect(() => {
  //       AuthCheck()
  //   }, [])

  // const AuthCheck = onAuthStateChanged(auth, (user) => {

  //   if (user) {
  //     setuuid(user.uid)
  //     setLoading(false)
  //     console.log(user.uid)




  //   }
  // });
  

  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://apigreendesert.onrender.com/user/one/${uuid}`
    }).then((res) => {
      console.log(res.data)
      setUser2(res.data)
      console.log(user2)

      if (user2.role.id == 1) {
        console.log('soy admin')
        setDisable(false)
      } else {
        console.log('soy operador')
        setDisable(true)
      }
    })
  }, [])


  const handleac = () => {
    axios({
      method: 'GET',
      url: `https://apigreendesert.onrender.com/user/one/${uuid}`
    }).then((res) => {
      console.log(res.data)
      setUser2(res.data)
      console.log(user2)

      if (user2.role.id == 1) {
        console.log('soy admin')
        setDisable(false)
      } else {
        console.log('soy operador')
        setDisable(true)
      }
    })
  }
  // const [disable, setDisable] = useState(false)
  // const [uuid, setuuid] = useState<any>()
  // const auth = getAuth()
  // const [loading, setLoading] = useState(false)
  // const [user2, setUser2]= useState<any>({})


  // useEffect(() => {
  //     AuthCheck()
  // }, [auth])

  // const AuthCheck = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //          setuuid(user.uid) 
  //         setLoading(false)
  //         console.log(user.uid)
          
  //             axios({
  //                 method: 'GET',
  //                 url: `https://apigreendesert.onrender.com/user/one/${user.uid}`
  //             }).then((res) => {
  //                 console.log(res.data)
  //                 setUser2(res.data)
  //                 console.log(user2)

  //                 if(user2.role.id == 1){
  //                     console.log('soy operador')
  //                     setDisable(true)
  //                 }else{
  //                     console.log('soy admin')
  //                     setDisable(false)
  //                 }
  //             })
          

  //     } else {
          
  //     }
  // });

  // const[employee, setEmployee] = useState<employeeModel>({
  //     name: '',
  //     fristSurname: '',
  //     secondSurname: '',
  //     birthday: '',
  //     email: '',
  //     phonenumber: '',
  //     status: '',
  //     user: {}

  // })
  const url = 'https://apigreendesert.onrender.com/user'
  // const handleimputChange = ({target:{name, value}}:any) =>{

  //    console.log(evt.currentTarget.value)
  //   console.log(name)
  //   setEmployee({...employee, [name]:value})
  // }

  // const handleSubmit = async(evt: React.FormEvent<HTMLFormElement| HTMLButtonElement>) =>{
  //   evt.preventDefault()
  //   console.log(employee)


  //   const newEmployee ={
  //     name: employee.name,
  //     fristSurname: employee.fristSurname,
  //     secondSurname: employee.secondSurname,
  //     birthday: employee.birthday,
  //     email: employee.email,
  //     phonenumber: employee.phonenumber,
  //     status: 'activo',
  //   }
  //   await axios({
  //     method:'POST',
  //     url:'https://apigreendesert.onrender.com/employee',
  //     data:JSON.stringify(newEmployee),
  //     headers:{
  //       'Content-Type':'application/json'
  //     }
  //   }).then(res => console.log(res.data))
  //   .catch(err => console.log(err))
  // }
  {/*
    Atributes
      name
      fristSurname
      secondSurname
      birthday
      address
      email
      phonenumber
      status
  */}
  {/*
    Atributes
      name
      fristSurname
      secondSurname
      birthday
      email
      phonenumber
      status
  */}

  const validationSchema = yup.object().shape({
    quantity: yup.number().positive().required('La cantidad tiene que ser requerida').min(1, 'tiene que ser un minimo de 1 nuemros'),
    customer: yup.number().positive().required('El cliente tiene que ser requerido').min(1, 'tiene que ser un minimo de 1 nuemros'),
    employee: yup.number().positive().required('El empleado tiene que ser requerido').min(1, 'tiene que ser un minimo de 1 nuemros'),
    product: yup.number().positive().required('el producto tiene que ser requerido').min(1, 'tiene que ser un minimo de 1 nuemros'),
  });

  const formik = useFormik<Ijobordermodel>({
    initialValues: {
      quantity: 0,
      customer: 0,
      employee: {
        name: '',
        fristSurname: '',
        secondSurname: '',
        birthday: '',
        email: '',
        phonenumber: '',
        password: '',
        user: {
            uuid: '',
            email: '',
            password: '',
            role: 2,
        },
    },
      status: true,
      inventory:[ {
        quantity: 0,
        spot: '',
      }],
      product: 0,
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      //alert(JSON.stringify(values, null, 2));
      const newjoborder = {
        quantity: values.quantity,
        customer: values.customer,
        employee: values.employee,
        status: true,
        inventory: [{
          quantity: values.quantity,
          spot: values.inventory,
        }],
        product: values.product
      }

      console.log(newjoborder)
      await axios({
          method: 'POST',
          url: 'https://apigreendesert.onrender.com/jobOrder',
          data: JSON.stringify(newjoborder),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((res)=>{console.log(res)
          Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'joborder Registrada Con exito',
                showConfirmButton: false,
                timer: 1500
              })})
      // await axios({
      //   method: 'POST',
      //   url: 'https://apigreendesert.onrender.com/provider',
      //   data: JSON.stringify(newProvider),
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // }).then(res => {
      //   console.log(JSON.stringify(res.data.id))
      //   const newimg = {
      //     image: newProvider.product.image,
      //     id: res.data.id
      //   }
      //   axios({
      //     method: 'POST',
      //     url: `https://apigreendesert.onrender.com/product/upload${JSON.stringify(res.data.id)}`,
      //     data: JSON.stringify(newimg),
      //     headers: {
      //       'Content-Type': 'application/json'
      //     }
      //   }).then((res) => {
      //     console.log(res.data)
      //   }).then((err) => { console.log(err) })
      //   Swal.fire({
      //     position: 'top-end',
      //     icon: 'success',
      //     title: 'proveedpr Registrado Con exito',
      //     showConfirmButton: false,
      //     timer: 1500
      //   })
      // })
      //   .catch(err => console.log(err))
      resetForm()


    },
  })
  
  return (
    <>

      <Grid container
        direction={'column'}
        alignItems='center'>
        <Typography variant='h2'>Registrar Orden de trabajo</Typography>
      </Grid>

      <Grid container
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        direction={'row'}
        sx={{
          backgroundColor: 'primary.light',
          borderRadius: '5px',
          p: '2em'
        }}>

        <Grid container xs={5} sm={5} md={4}
          textAlign='center'
          alignContent='center'>
          <Person sx={{ fontSize: '400px', color: 'white' }} />
          <Button variant='outlined' />
        </Grid>


        <Grid container
          xs={10} sm={10} md={7}
          sx={{ color: 'white' }}
          direction='column'
          alignContent='center'
          textAlign='center'>
        <Button color='info' variant="outlined" onClick={handleac}>Comprobar Estado</Button>

          <form onSubmit={formik.handleSubmit}>
            
            <Typography variant='h6'>cantidad</Typography>
            <TextField name="quantity" type='number'
              value={formik.values.quantity}
              onChange={formik.handleChange}
              error={formik.touched.quantity && Boolean(formik.errors.quantity)}
              helperText={formik.touched.quantity && formik.errors.quantity} />
            <br />
            <Typography variant='h6'>cliente</Typography>
            <TextField name="customer" type='number'
              value={formik.values.customer}
              onChange={formik.handleChange}
              error={formik.touched.customer && Boolean(formik.errors.customer)}
              helperText={formik.touched.customer && formik.errors.customer} />
            <br />
            <Typography variant='h6'>Empleado</Typography>
            <TextField name="employee" type='number'
              value={formik.values.employee?.id}
              onChange={formik.handleChange}
              error={formik.touched.employee?.id && Boolean(formik.errors.employee?.id)}
              helperText={formik.touched.employee?.id && formik.errors.employee?.id} />
            <br />
            <Typography variant='h6'>Inventario</Typography>
            <TextField name="product" type='number'
              value={formik.values.product}
              onChange={formik.handleChange}
              error={formik.touched.product && Boolean(formik.errors.product)}
              helperText={formik.touched.product && formik.errors.product} />
            <br />


            <Grid item>
              <Button  variant='contained' disabled={disable} type='submit'>Registrar Orden de trabajo</Button>
            </Grid>
          </form>
        </Grid>

      </Grid>
    </>

  )
}
