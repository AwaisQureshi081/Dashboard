import React, { useEffect, useRef } from 'react';
//import { Chart } from 'chart.js';
import { BarController, CategoryScale, LinearScale, BarElement, Chart } from 'chart.js';
Chart.register(BarController, CategoryScale, LinearScale, BarElement);

// import React, { useEffect, useRef } from 'react';
// import Chart from 'chart.js/auto';

const MonthlyEarningsChart = ({ data }) => {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      // Destroy existing chart if it exists
      if (chartInstance) {
        chartInstance.destroy();
      }

      // Create new chart
      chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.months,
          datasets: [{
            label: 'Monthly Earnings',
            data: data.earnings,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          }]
        },
        options: {
          scales: {
  
          }
        }
      });
    }

    // Cleanup: Destroy the chart when the component unmounts
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [data]); // Re-run effect when data changes

  return (
    <div>
      <canvas ref={chartRef}  style={{width:'700px',maxHeight:'200px'}} ></canvas>
    </div>
  );
};

export default MonthlyEarningsChart;