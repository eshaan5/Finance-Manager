import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import useStyles from "./styles";

export const CustomisedSnackbar = ({ open, setOpen }) => {
    const classes = useStyles();

    const Close = (event, reason) => {
        if (reason === "clickaway") return;

        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <Snackbar
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            open={open}
            autoHideDuration={3000}
            onClose={Close}
            >
                <MuiAlert elevation={6} variant="filled" onClose={Close} severity="success">
                    Transaction is successful.
                </MuiAlert>
            </Snackbar>
        </div>
    )
}
