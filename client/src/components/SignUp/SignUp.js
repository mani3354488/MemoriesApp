// import React, {useState,useRef,useEffect} from 'react'
// import { Redirect, Link as RouterLink } from 'react-router-dom'
// import AuthService from '../../Services/AuthService';

// import Avatar from '@material-ui/core/Avatar'
// import Button from '@material-ui/core/Button'
// import CssBaseline from '@material-ui/core/CssBaseline'
// import TextField from '@material-ui/core/TextField'
// // import FormControlLabel from '@material-ui/core/FormControlLabel'
// // import Checkbox from '@material-ui/core/Checkbox'
// import Link from '@material-ui/core/Link'
// import Grid from '@material-ui/core/Grid'
// import Box from '@material-ui/core/Box'
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
// import Typography from '@material-ui/core/Typography'
// import { makeStyles } from '@material-ui/core/styles'
// import Container from '@material-ui/core/Container'
// import NavBar from '../AppBar/NavBar';

// function Copyright() {
//     return (
//         <Typography variant="body2" color="textSecondary" align="center">
//             {'Copyright © '}
//             <Link color="inherit" href="/">
//                 Your Website
//       </Link>{' '}
//             {new Date().getFullYear()}
//             {'.'}
//         </Typography>
//     )
// }

// const useStyles = makeStyles(theme => ({
//     paper: {
//         marginTop: theme.spacing(8),
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//     },
//     avatar: {
//         margin: theme.spacing(1),
//         backgroundColor: theme.palette.secondary.main,
//     },
//     form: {
//         width: '100%', // Fix IE 11 issue.
//         marginTop: theme.spacing(3),
//     },
//     submit: {
//         margin: theme.spacing(3, 0, 2),
//     },
// }))

// const SignUp = props => {
//     const classes = useStyles()
//     const [user,setUser] = useState({username: "", password : "", role : ""});
//     const [message,setMessage] = useState(null);
//     let timerID = useRef(null);

//     useEffect(()=>{
//         return ()=>{
//             clearTimeout(timerID);
//         }
//     },[]);

//     const onChange = e =>{
//         setUser({...user,[e.target.name] : e.target.value});
//     }

//     const resetForm = ()=>{
//         setUser({username : "", password : "",role : ""});
//     }

//     const onSubmit = e =>{
//         e.preventDefault();
//         AuthService.register(user).then(data=>{
//             const { message } = data;
//             setMessage(message);
//             resetForm();
//             if(!message.msgError){
//                 timerID = setTimeout(()=>{
//                     props.history.push('/login');
//                 },2000)
//             }
//         });
//     }



//     return (
//         <div>
//             <NavBar />
//             <Container component="main" maxWidth="sm">
//                 <CssBaseline />
//                 <div className={classes.paper}>
//                     <Avatar className={classes.avatar}>
//                         <LockOutlinedIcon />
//                     </Avatar>
//                     <Typography component="h1" variant="h5">
//                         Sign up
//                     </Typography>
//                     <form className={classes.form}  onSubmit={onSubmit} noValidate>
//                         <Grid container spacing={2}>
//                             {/* <Grid item xs={12} sm={6}>
//                                 <TextField
//                                     autoComplete="fname"
//                                     name="firstName"
//                                     variant="outlined"
//                                     required
//                                     fullWidth
//                                     id="firstName"
//                                     label="First Name"
//                                     autoFocus
//                                 />
//                             </Grid>
//                             <Grid item xs={12} sm={6}>
//                                 <TextField
//                                     variant="outlined"
//                                     required
//                                     fullWidth
//                                     id="lastName"
//                                     label="Last Name"
//                                     name="lastName"
//                                     autoComplete="lname"
//                                 />
//                             </Grid> */}
//                             <Grid item xs={12}>
//                                 <TextField
//                                     variant="outlined"
//                                     margin="normal"
//                                     required
//                                     fullWidth
//                                     id="username"
//                                     label="EmailAddress/Username"
//                                     name="username"
//                                     autoComplete="username"
//                                     autoFocus
//                                     onChange={onChange}
//                                 />
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <TextField
//                                     variant="outlined"
//                                     required
//                                     fullWidth
//                                     name="password"
//                                     label="Password"
//                                     type="password"
//                                     id="password"
//                                     autoComplete="current-password"
//                                     onChange={onChange}
//                                 />
//                             </Grid>
//                         </Grid>
//                         <Button
//                             fullWidth
//                             variant="contained"
//                             color="primary"
//                             className={classes.submit}
//                             type="submit"
//                         >
//                             Sign Up
//                         </Button>
//                         <Grid container justify="flex-end">
//                             <Grid item>
//                                 <Link component={RouterLink} to="/signin" variant="body2" href="#" className={classes.link}>
//                                     Already have an account? Sign in
//                                 </Link>
//                             </Grid>
//                         </Grid>
//                     </form>
//                 </div>
//                 <Box mt={5}>
//                     <Copyright />
//                 </Box>
//             </Container>
//         </div>
//     )
// }

// export default SignUp;