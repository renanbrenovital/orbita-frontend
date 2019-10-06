import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const optionsChart = {
  responsive: true,
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
  },
  title: {
    display: false,
  },
  legend: {
    display: false,
  },
  tooltips: {
    mode: 'index',
    intersect: false,
  },
  hover: {
    mode: 'nearest',
    intersect: true,
  },
  scales: {
    xAxes: [
      {
        display: true,
        scaleLabel: {
          display: false,
          labelString: 'Ano',
          fontColor: '#fff',
        },
        ticks: {
          display: true,
          fontColor: '#fff',
        },
      },
    ],
    yAxes: [
      {
        display: false,
        scaleLabel: {
          display: false,
          labelString: 'Capacidade instalada',
          fontColor: '#eee',
        },
      },
    ],
  },
};

export default function Graphic({ data }) {
  return <Line data={data} options={optionsChart} height={60} />;
}
