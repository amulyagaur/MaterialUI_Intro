import React from 'react';
import {AppBar, Toolbar, Typography, makeStyles} from '@material-ui/core';
import AcUnitIcon from '@material-ui/icons/AcUnit';

const useStyles = makeStyles(()=>({
    tStyle: {
        flex:1
    }
}
))

function Header() {
    const classes = useStyles();
    return(
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.tStyle}>
                    Amulya Gaur
                </Typography>
                <AcUnitIcon />
            </Toolbar>
        </AppBar>
    )
}

export default Header;