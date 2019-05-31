import * as React from 'react';
import './Header.css';
import {AppBar, makeStyles, Toolbar, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';

export default function Header() {
    const classes = useStyles();

    return (
       <AppBar position={'relative'} color={'primary'}>
           <Toolbar>
               <Typography className={classes.title} variant="h6" noWrap={true}>
                   <Link to="/">Material-UI</Link>
               </Typography>
           </Toolbar>
       </AppBar>
    );
}

const useStyles = makeStyles(theme => ({
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
}));
