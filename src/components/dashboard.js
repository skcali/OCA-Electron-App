import React from "react";
import { Doughnut, Bar } from 'react-chartjs-2';

const data = {
    labels: [
        'JavaScript',
        'C#',
        'HTML'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            '#99b3ff',
            '#ccccff',
            '#99ddff'
        ],
        hoverBackgroundColor: [
            '#809fff',
            '#b3b3ff',
            '#80d4ff'
        ]
    }]
};

const dataBar = {
    labels: ['#1', '#2', '#3', '#4'],
    datasets: [
        {
            label: 'Hours Spent',
            backgroundColor: '#99ddff',
            borderColor: '#99b3ff',
            borderWidth: 2,
            hoverBackgroundColor: '#80d4ff',
            hoverBorderColor: '#809fff',
            data: [4.72, 2.25, 3.25, 3.75]
        }
    ]
};

class Dashboard extends React.Component {
    render() {
        return (
            <div style={{ columnCount: 2, width: '90%', fontFamily: 'helvetica', color: '#A9A9A9', fontSize: '1em', margin: 'auto', textAlign: 'center'}}>
                <div>
                    <h3>Languages Used</h3>
                    <Doughnut data={data} />
                </div>
                <div>
                    <h3>Time spent on projects</h3>
                    <Bar data={dataBar} />
                </div>
            </div>
        );
    }
};

export default Dashboard;
