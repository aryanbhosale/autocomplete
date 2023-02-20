import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './PieChart.css';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);


const PieChart = () => {

  const data = {
    labels: ['Ungraded', 'Graded'],
    datasets: [{
      label: 'Assignments',
      data: [14, 20],
      backgroundColor: ['#CF2027', '#2B2B88'],
      borderColor: ['#CF2027', '#2B2B88'],
    }]
  }

  const options = {
    cutout: 80,
    plugins: {
      legend: {
        display: false
      }
    }
  }

  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;

      ctx.save();
      ctx.font = 'bolder 1em sans-serif';
      ctx.fillStyle = '#5CCAE8';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`Graded: ${data.datasets[0].data[0]} / ${data.datasets[0].data[1]}`, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
    }
  }

  return (
    <div>
      <div style={{ width: '13%', height: '13%', margin: 'auto', padding: '20px' }}>
        <Doughnut
          data={data}
          options={options}
          plugins={[textCenter]}
        >
        </Doughnut>
      </div>
    </div>
  );
}

export default PieChart;