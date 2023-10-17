import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

export const ProductCharts = () => {
  const data = [
    { value: 65, key: 1, color: '#36A2EB' },
    { value: 35, key: 2, color: '#FFCE56' },
  ];

  return <PieChart data={data}   style={{width:'200px', height:'200px'}}/>;
};