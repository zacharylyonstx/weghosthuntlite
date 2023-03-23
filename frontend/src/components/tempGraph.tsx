import React from 'react';
import BaseGraphComponent from './baseGraphComponent';

interface TempGraphProps {
  data: any[];
  unit: 'C' | 'F';
}

const TempGraph: React.FC<TempGraphProps> = ({ data, unit }) => {
  const tempData = data.filter((item) => item.type === 'temperature');

  const onTooltipFormat = (value: number) => {
    return unit === 'C' ? value : CelsiusToFahrenheit(value);
  };

  return (
    <BaseGraphComponent
      data={tempData}
      yField="temperature"
      color="red"
      unit={`°${unit}`}
      onTooltipFormat={onTooltipFormat}
    />
  );
};

export default TempGraph;
