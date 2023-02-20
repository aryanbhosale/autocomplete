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
    labels: ['Not Graded', 'Graded'],
    datasets: [{
      label: 'Assignments',
      data: [3, 6],
      backgroundColor: ['red', 'blue'],
      borderColor: ['red', 'blue'],
    }]
  }

  const options = {

  }

  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;

      ctx.save();
      ctx.font = 'bolder 30px sans-serif';
      ctx.fillStyle = 'blue';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`Graded: ${data.datasets[0].data[0]} / ${data.datasets[0].data[1]}`, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
    }
  }

  return (
    <div>
      <div style={{ width: '50%', height: '50%', margin: 'auto', padding: '20px' }}>
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