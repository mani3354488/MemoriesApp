// import React, {useState,useContext} from 'react'
// import { Redirect, Link as RouterLink } from 'react-router-dom'
// // import AuthService from '../../Services/AuthService';
// // import {AuthContext} from '../../Context/AuthContext';
// // import Message from '../../Components/Message';

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
// // import NavBar from '../AppBar/NavBar';


// function Copyright() {
//     return (
//         <Typography variant="body2" color="textSecondary" align="center">
//             {'Copyright © '}
//             <Link color="inherit" href="/">
//                 AllFreight 
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
//         marginTop: theme.spacing(1),
//     },
//     submit: {
//         margin: theme.spacing(3, 0, 2),
//     },
// }))


// const SignIn = props => {
//     const classes = useStyles()
//     const [user,setUser] = useState({username: "", password: ""});
//     const [message,setMessage] = useState(null);
//     const authContext = useContext(AuthContext);

//     const onChange = e => {
//         setUser({...user,[e.target.name] : e.target.value});
//     }
//     const onSubmit = e => {
//         e.preventDefault();
//         AuthService.login(user).then(data=>{
//             console.log(data);
//             const { isAuthenticated, user, message} = data;
//             if(isAuthenticated){
//                 authContext.setUser(user);
//                 authContext.setIsAuthenticated(isAuthenticated);
//                 if(user.role === "user"){
//                     return (
//                         props.history.push('/userdashboard')
//                     );
//                 } else if(user.role === "admin"){
//                     return (
//                         props.history.push('/admindashboard')
//                     );
//                 } else if(user.role === "transporter"){
//                     return (
//                         props.history.push('/transporterdashboard')
//                     );
//                 } else {
//                     return (
//                         props.history.push('/signup')
//                     );
//                 }
//             }
//             else
//                 setMessage(message);
//         });
//     }
//     return (
//         <div>
//             {/* <NavBar /> */}
//             <Container component="main" maxWidth="sm">
//             <CssBaseline />
//             <div className={classes.paper}>
//                 <Avatar className={classes.avatar}>
//                     <LockOutlinedIcon />
//                 </Avatar>
//                 <Typography component="h1" variant="h5">
//                     Sign in
//                 </Typography>
//                 <form className={classes.form} onSubmit={onSubmit} noValidate>
//                     <TextField
//                         variant="outlined"
//                         margin="normal"
//                         required
//                         fullWidth
//                         id="username"
//                         label="Email Address/Username"
//                         name="username"
//                         autoComplete="username"
//                         autoFocus
//                         onChange={onChange}
//                     />
//                     <TextField
//                         variant="outlined"
//                         margin="normal"
//                         required
//                         fullWidth
//                         name="password"
//                         label="Password"
//                         type="password"
//                         id="password"
//                         autoComplete="current-password"
//                         onChange={onChange}
//                     />
//                     <Button
//                         fullWidth
//                         variant="contained"
//                         color="primary"
//                         className={classes.submit}
//                         type="submit"
//                     >
//                         Sign In
//                      </Button>
//                     <Grid container>
//                         <Grid item xs>
//                             <Link href="#" variant="body2">
//                                 Forgot password?
//                             </Link>
//                         </Grid>
//                         <Grid item>
//                             <Link component={RouterLink} to="/signup" variant="body2" href="#" className={classes.link}>
//                                 {"Don't have an account? Sign Up"}
//                             </Link>
//                         </Grid>
//                     </Grid>
//                 </form>
//                 {/* {message ? <Message message={message} /> : null} */}
//             </div>
//             <Box mt={8}>
//                 <Copyright />
//             </Box>
//         </Container>
//         </div>        
//     )
// }

// export default SignIn;