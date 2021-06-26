import React from 'react'
import './App.css';
import Addpost from './components/Addpost';
import Editpost from './components/Editpost';
import Postlist from './components/Postlist';
import { BrowserRouter, Route } from 'react-router-dom'
import {  makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline';





const useStyles = makeStyles({
  root: {
    background: '#333333',
    padding: '15px 0'
  },
  rootFonts: {
    fontSize: '3rem',
    width: '100%',
    textTransform: 'capitalize'
  }

})


function App() {
  const classes = useStyles()
  return (
    <div>
      <AppBar className={classes.root} position="static">
        <Toolbar>

            <Typography align='center' className={classes.rootFonts} variant="h1">
            <a href='/' style={{color: '#fff', textDecoration: 'none'}}>welcome to crud app</a>
            </Typography>


        </Toolbar>
      </AppBar>
      <BrowserRouter>
        <Route path='/' component={Postlist} exact />
        <Route path='/addpost' component={Addpost} exact />
        <Route path='/editpost/:postid' component={Editpost} exact />
      </BrowserRouter>
      <CssBaseline></CssBaseline>
      
    </div>
  );
}

export default App;
