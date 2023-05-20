import { Box, Button, Grid, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { employeeModel } from '../../assets/models/employee.model'
import { userModel } from '../../assets/models/user.model'
import * as yup from 'yup'
import { IProvider } from '../../assets/models/provider.model'
import { IProduct } from '../../assets/models/product.model'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { uuid } from '../../services/auth/AuthRouter'


let idTest: number
let idt: number

let idTest2: number



const getId = (id: number): any => {
    return (
        Swal.fire({
            title: '¿Seguro que quieres eliminar?',
            text: "Una vez hecha esta accion no podra revertirce",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, quiero eliminarlo'
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(id)
                Swal.fire(
                    'Eliminado',
                    'Los datos han sido eliminados',
                    'success'
                )
                axios.delete(`https://apigreendesert.onrender.com/provider/delete/${id}`).then((res) => { console.log(res), window.location.reload() }).catch((err) => { console.log(err) })
            }
        })
    )
}
const Proveedorespage = () => {
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

    const [user, setUser] = useState<IProvider[]>([])
    const navigate = useNavigate()
    const [idv, setIdv] = useState({
        id: 0
    })
    const getIdv5 = async (idv2: any): Promise<any> => {
        return (

            await axios({
                method: 'GET',
                url: `https://apigreendesert.onrender.com/provider/${idv2}`
            }).then(async (res) => {
                console.log("x" + res)

                await setprovider(res.data)
                console.log(provider)
                setIdv(idv2)

                formik.values.name = provider.name
                formik.values.company = provider.company
                formik.values.address = provider.address
                formik.values.email = provider.email
                formik.values.phonenumber = provider.phonenumber

            }).catch((err) => { console.log(err) })


        )
    }
    // edit
    const [provider, setprovider] = useState<IProvider>({
        name: '',
        company: '',
        address: '',
        email: '',
        phonenumber: '',
        status: true,
        //porduct
        nameproduct: '',
        description: '',
        brand: '',
        image: '',
        //end 
        //inventory
        quantity: 0,
        spot: '',
        //end
        product: {
            name: '',
            description: '',
            brand: '',
            image: '',
            inventory: {
                quantity: 0,
                spot: '',
            }
        }
    })
    useEffect(() => {

        // axios({
        //   method: 'GET',
        //   url: `https://apigreendesert.onrender.com/employee/${idv}`
        // }).then((res) => {
        //   console.log("x" + res)

        //   setEmployee(res.data)
        //   console.log(employee)

        // }).catch((err) => { console.log(err) })

    }, [])
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const [idprovedor, setIdProvedor] = useState();
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const handleOpen = async () => {

        await setOpen(true)
    };

    const handleOpen2 = async (idv2: any): Promise<any> => {

        await setOpen2(true)
        console.log(idv2)
        setIdProvedor(idv2)
        // formik.values.name = provider.name
        // formik.values.company = provider.company
        // formik.values.address = provider.address
        // formik.values.email = provider.email
        // formik.values.phonenumber = provider.phonenumber
    };
    const handleClose = () => setOpen(false);
    const handleClose2 = () => setOpen2(false);



    const validationSchema = yup.object().shape({
        name: yup.string().trim().required('El nombre es requerido').min(5, ' tiene que tener un minimo de 5 caracteres').max(255, 'solo se pueden 255 caracteres'),
        company: yup.string().trim().required('La compañia paterno es requerido').min(3, ' tiene que tener un minimo de 3 caracteres').max(255, 'solo se pueden 255 caracteres'),
        address: yup.string().trim().required('La direccion materno es requerido').min(30, ' tiene que tener un minimo de 30 caracteres').max(255, 'solo se pueden 255 caracteres'),
        email: yup.string().trim().required('El email tiene que ser requerido').email('ingresa un email valido'),
        phonenumber: yup.string().trim().required('El telefono tiene que ser requerido').min(10, 'tiene que ser un minimo de 10 nuemros').max(10, 'tiene que tener un maximo de 10 numeros'),
    });

    const validationSchema2 = yup.object().shape({
        name: yup.string().trim().required('Nombre del producto es requerido').min(5, ' tiene que tener un minimo de 5 caracteres').max(255, 'solo se pueden 255 caracteres'),
        description: yup.string().trim().required('La descripcion es requerida').min(5, ' tiene que tener un minimo de 5 caracteres').max(255, 'solo se pueden 255 caracteres'),
        brand: yup.string().trim().required('La brand es requerida').min(4, ' tiene que tener un minimo de 4 caracteres').max(255, 'solo se pueden 255 caracteres'),
        quantity: yup.string().trim().required('La cantidad tiene que ser requerida').min(1, 'tiene que ser un minimo de 1 nuemros'),

    });

    const formik2 = useFormik<IProduct>({
        initialValues: {
            name: '',
            description: '',
            brand: '',
            image: '',
            inventory: {
                quantity: 0,
                spot: '',
            }

        },
        validationSchema: validationSchema2,
        onSubmit: async (values, { resetForm }) => {
            //alert(JSON.stringify(values, null, 2));

            const newProduct = {
                name: values.name,
                description: values.description,
                brand: values.brand,
                image: values.image,
                inventory: {
                    quantity: values.inventory.quantity,
                    spot: values.inventory.spot,
                },
                provider: idprovedor
            }
            console.log(newProduct)
            //axios.put(`https://apigreendesert.onrender.com/employee/update/${params.id}`, {newEmployee}).then((res)=>{console.log(res.status)}).catch((err)=>{console.log(err)})

            await axios({
                method: 'POST',
                url: `https://apigreendesert.onrender.com/product`,
                data: JSON.stringify(newProduct),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                console.log(res.data)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Has agregado con exito un nuevo producto!',
                    showConfirmButton: false,
                    timer: 1500
                })
                resetForm()
            })
                .catch(err => console.log(err))
        }
    })
    const formik = useFormik<IProvider>({
        initialValues: {
            name: '',
            company: '',
            address: '',
            email: '',
            phonenumber: '',
            status: true,
            //porduct
            nameproduct: '',
            description: '',
            brand: '',
            image: '',
            //end 
            //inventory
            quantity: 0,
            spot: '',
            //end
            product: {
                name: '',
                description: '',
                brand: '',
                image: '',
                inventory: {
                    quantity: 0,
                    spot: '',
                }
            }
        },
        validationSchema: validationSchema,
        onSubmit: async (values, { resetForm }) => {
            //alert(JSON.stringify(values, null, 2));

            const newProvider = {
                name: values.name,
                company: values.company,
                address: values.address,
                email: values.email,
                phonenumber: values.phonenumber,
                status: true,
                //end
                product: {
                    name: values.nameproduct,
                    description: values.description,
                    brand: values.brand,
                    image: values.image,
                    inventory: {
                        quantity: values.quantity,
                        spot: values.spot,
                    }
                }
            }
            console.log(newProvider)
            //axios.put(`https://apigreendesert.onrender.com/employee/update/${params.id}`, {newEmployee}).then((res)=>{console.log(res.status)}).catch((err)=>{console.log(err)})

            await axios({
                method: 'PUT',
                url: `https://apigreendesert.onrender.com/provider/update/${idv}`,
                data: JSON.stringify(newProvider),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                console.log(res.data)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Has actualizado con exito!',
                    showConfirmButton: false,
                    timer: 1500
                })
                resetForm()
                handleClose()
                
                window.location.reload()
            })
                .catch(err => console.log(err))
        }
    })
    // end edit
    useEffect(() => {
        axios({
            method: 'GET',
            url: 'https://apigreendesert.onrender.com/provider/all'
        }).then((res) => {
            console.log(res.data)
            setUser(res.data)
        })
    }, [])
    return (
        <div>
            <Typography variant='h3' textAlign={'center'}>Proveedores Registrados</Typography>
            <br />

            <TableContainer sx={{ textAlign: 'justify' }}>
                <Table>
                    <TableHead >
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>compañia</TableCell>
                            <TableCell>Direccion</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Celular</TableCell>
                            <TableCell>Estatus</TableCell>
                            <TableCell>Nombre del producto</TableCell>
                            <TableCell>Acciones</TableCell>
                            <TableCell>
                              <Button color='info' variant="outlined" onClick={handleac}>Comprobar Estado</Button>

                            </TableCell>
                        </TableRow>

                    </TableHead>
                    <TableBody>

                        {
                            user.map((t: any, index) => (
                                <TableRow key={t.id}>
                                    <TableCell key={t.id}>{index + 1}</TableCell>
                                    <TableCell>{t.name}</TableCell>
                                    <TableCell>{t.company}</TableCell>
                                    <TableCell>{t.address}</TableCell>
                                    <TableCell>{t.email}</TableCell>
                                    <TableCell>{t.phonenumber}</TableCell>
                                    <TableCell>{`${t.status}`}</TableCell>
                                    <TableCell>{JSON.stringify(`${t.product.name}`)}</TableCell>
                                    <TableCell>
                                        <Button color='success'disabled={disable} variant='outlined' onClick={async () => {
                                            await getIdv5(t.id).then(async (res) => {
                                                await handleOpen()

                                            })
                                            console.log(t.id)
                                            console.log(idv);
                                        }}>Editar</Button>


                                        &nbsp; <Button color='error'disabled={disable} variant="outlined" onClick={() => {

                                            getId(t.id)

                                            // axios.delete(`https://apigreendesert.onrender.com/employee/delete/${t.id}`).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})
                                        }}>Eliminar</Button>  &nbsp;
                                        <Button color='info'disabled={disable} variant='outlined' onClick={async () => {
                                            // await getIdv5(t.id).then(async (res) => {

                                            // })
                                            await handleOpen2(t.id)
                                            console.log(t.id)
                                            console.log(idv);
                                        }}>Agregar producto</Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        }

                    </TableBody>
                </Table>
            </TableContainer>

            <>
                <Modal
                    open={open}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Button onClick={handleClose}>X</Button>
                        <form onSubmit={formik.handleSubmit}>
                            <Typography variant='h6'>Nombre</Typography>
                            <TextField name='name'
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name} />
                            <br />

                            <Typography variant='h6'>Compañia</Typography>
                            <TextField name='company'
                                value={formik.values.company}
                                onChange={formik.handleChange}
                                error={formik.touched.company && Boolean(formik.errors.company)}
                                helperText={formik.touched.company && formik.errors.company} />
                            <br />
                            <Typography variant='h6'>Direccion</Typography>
                            <TextField name='address'
                                value={formik.values.address}
                                onChange={formik.handleChange}
                                error={formik.touched.address && Boolean(formik.errors.address)}
                                helperText={formik.touched.address && formik.errors.address} />
                            <br />
                            <Typography variant='h6'>Correo electronico</Typography>
                            <TextField name='email'
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email} />
                            <br />
                            <Typography variant='h6'>numero celular</Typography>
                            <TextField name='phonenumber'
                                value={formik.values.phonenumber}
                                onChange={formik.handleChange}
                                error={formik.touched.phonenumber && Boolean(formik.errors.phonenumber)}
                                helperText={formik.touched.phonenumber && formik.errors.phonenumber} />
                            <br />



                            <Grid item>
                                <Button variant='contained' type='submit'>Actualizar proveedor</Button>
                            </Grid>
                        </form>
                    </Box>
                </Modal>
            </>

            <>
                <Modal
                    open={open2}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Button onClick={handleClose2}>X</Button>
                        <form onSubmit={formik2.handleSubmit}>
                            <Typography variant='h6'>Nombre</Typography>
                            <TextField name='name'
                                value={formik2.values.name}
                                onChange={formik2.handleChange}
                                error={formik2.touched.name && Boolean(formik2.errors.name)}
                                helperText={formik2.touched.name && formik2.errors.name} />
                            <br />

                            <Typography variant='h6'>descripcion</Typography>
                            <TextField name='description'
                                value={formik2.values.description}
                                onChange={formik2.handleChange}
                                error={formik2.touched.description && Boolean(formik2.errors.description)}
                                helperText={formik2.touched.description && formik2.errors.description} />
                            <br />
                            <Typography variant='h6'>brand</Typography>
                            <TextField name='brand'
                                value={formik2.values.brand}
                                onChange={formik2.handleChange}
                                error={formik2.touched.brand && Boolean(formik2.errors.brand)}
                                helperText={formik2.touched.brand && formik2.errors.brand} />
                            <br />
                            <Typography variant='h6'>imagen</Typography>
                            <TextField name='image' type='file'
                                value={formik2.values.image}
                                onChange={formik2.handleChange}
                                error={formik2.touched.image && Boolean(formik2.errors.image)}
                                helperText={formik2.touched.image && formik2.errors.image} />
                            <br />
                            <Typography variant='h6'>cantidad</Typography>
                            <TextField name='inventory.quantity'
                                value={formik2.values.inventory.quantity}
                                onChange={formik2.handleChange}
                                error={formik2.touched.inventory?.quantity && Boolean(formik2.errors.inventory?.quantity)}
                                helperText={formik2.touched.inventory?.quantity && formik2.errors.inventory?.quantity} />
                            <br />

                            <Typography variant='h6'>spot</Typography>
                            <TextField name='inventory.spot'
                                value={formik2.values.inventory.spot}
                                onChange={formik2.handleChange}
                                error={formik2.touched.inventory?.spot && Boolean(formik2.errors.inventory?.spot)}
                                helperText={formik2.touched.inventory?.spot && formik2.errors.inventory?.spot} />
                            <br />


                            <Grid item>
                                <Button variant='contained' type='submit'>Agregar producto</Button>
                            </Grid>
                        </form>
                    </Box>
                </Modal>
            </>
        </div>
    )
}

export default Proveedorespage