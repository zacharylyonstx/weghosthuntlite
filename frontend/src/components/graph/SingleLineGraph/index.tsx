// @ts-nocheck
import React from 'react';
import { Line } from '@ant-design/charts';

const SingleLineGraph = ({ data, columnName }) => {
  const config = {
    height: 300,
    data: data,
    xField: 'time',
    yField: 'value',
    seriesField: 'type',
    xAxis: { type: 'time', label: { formatter: (time) => time } },
    yAxis: {
      label: {
        formatter: (value) => `${value}`,
      },
    },
    tooltip: {
      showMarkers: false,
      shared: true,
    },
    slider: {
      start: 0,
      end: 1,
      trendCfg: { isArea: true },
    },
    scrollbar: {
      type: 'horizontal',
    },
  };

  return (
    <div>
      <h3>{columnName}</h3>
      <Line {...config} />
    </div>
  );
};

export default SingleLineGraph;
