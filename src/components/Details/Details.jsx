import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Chart, Doughnut, Pie } from 'react-chartjs-2';

import useStyles from './styles';
import useTransactions from '../../useTransactions';

var Chart1 = require('chart.js');

const DetailsCard = ({ title, subheader }) => {
  const { total, chartData } = useTransactions(title);
  const classes = useStyles();

  return (
    <Card className={title === 'Income' ? classes.income : classes.expense} id='chart'>
      <CardHeader title={title} subheader={subheader} />
      <CardContent>
        <Typography variant="h5">₹{total}</Typography>
      </CardContent>
    </Card>
  );
};

export default DetailsCard;
