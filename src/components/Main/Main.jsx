import React, { useContext } from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';

import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';
import { ExpenseTrackerContext } from '../../context/context';

const Main = () => {
    const classes = useStyles();
    const { balance } = useContext(ExpenseTrackerContext);
    return (
        <Card className={classes.root}>
            <CardHeader title="Finance Manager" subheader="Created by Eshaan" />
            <CardContent>
                <Typography align='center' variant="h5">Total Balace: ₹{balance}</Typography>
                {/*<Typography style={{ lineHeight: '1.5em', marginTop: '20px' }} variant="subtitle1">
                    Try saying: Add income for ₹100 in Category Salary for Monday
                </Typography>*/}
                <Divider className={classes.divider} />
                <Form />
                </CardContent>
                <CardContent className={classes.CardContent}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <List />
                            </Grid>
                            </Grid>
                            </CardContent>         
                 </Card>

    );
}

export default Main
