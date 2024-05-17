import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Sales for 2024 (in thousands)',
                data: [3, 2, 2, 1, 5, 4],
                fill: false,
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgba(75, 192, 192, 0.2)',
            },
        ],
    };

    return <Line data={data} />;
}

export default LineChart;
