import React, { useState, useContext } from 'react'
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

import { ExpenseTrackerContext } from '../../../context/context';
import useStyles from './styles';

import { v4 as uuidv4 } from 'uuid';
import { incomeCategories, expenseCategories } from '../../../constants/categories';
import { CustomisedSnackbar } from '../../Snackbar/Snackbar';

const initialState = {
    type: '',
    category: '',
    amount: '',
    date: new Date().toLocaleString()
}
const Form = () => {
    const classes = useStyles();
    const [formData, setformData] = useState(initialState);
    const { addTransaction } = useContext(ExpenseTrackerContext);
    const [open, setOpen] = useState(false);

    const createTransaction = () => {
        const transaction = { ...formData, amount: Number(formData.amount), id: uuidv4() };
        setOpen(true);
        addTransaction(transaction);
        setformData(initialState);
    }

    const selectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories;
    return (
        <Grid container spacing={2}>
            <CustomisedSnackbar open={open} setOpen={setOpen} />
            <Grid item xs={12}>
                {/*<Typography variant="subtitle2" align="center" gutterBottom>
                    Words said to speechly
    </Typography>*/}
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select value={formData.type} onChange={(e) => setformData({ ...formData, type: e.target.value })}>
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
        </Grid>
        <Grid item xs={6}>
            <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select value={formData.category} onChange={(e) => setformData({ ...formData, category: e.target.value})}>
                    {selectedCategories.map(category => <MenuItem value={category.type} key={category.type}>{category.type}</MenuItem>)}
                    </Select>
            </FormControl>
        </Grid>
        <Grid item xs={6}>
            <TextField type="number" label="Amount (₹)" fullWidth value={formData.amount} onChange={(e) => setformData({ ...formData, amount: e.target.value})} />
            </Grid>
            <Grid item xs={6}>
            <TextField type="date" label="Date" fullWidth value={formData.date} onChange={(e) => setformData({ ...formData, date: e.target.value})} />
            </Grid>
            <Button variant="contained" color="primary" fullWidth className={classes.button} onClick={createTransaction}>Create</Button>
        </Grid>
    )
}

export default Form
