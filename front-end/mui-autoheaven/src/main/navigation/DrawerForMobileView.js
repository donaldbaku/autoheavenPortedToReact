import React, { Fragment, useState } from "react";
import { SwipeableDrawer, IconButton } from "@material-ui/core";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const DrawerForMobileView = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <Fragment>
            <SwipeableDrawer anchor="right" open={openDrawer} onOpen={() => setOpenDrawer(true)} onClose={() => setOpenDrawer(false)} >              
                    <Button variant="text" to="/home" LinkComponent={Link} >Home</Button>
                    <Button variant="text" to="/products"  LinkComponent={Link} >Products</Button>
                    <Button variant="text" to="/about"  LinkComponent={Link} >About Us</Button>
                    <Button variant="text" LinkComponent={Link} to="/login">Login</Button>
            </SwipeableDrawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </Fragment>
    )
}

export default DrawerForMobileView;