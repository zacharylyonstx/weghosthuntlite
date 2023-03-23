import React, { useState, useEffect } from 'react';
import { Line } from '@antv/g2plot';
import { Checkbox, Radio, Tooltip } from 'antd';
import { CelsiusToFahrenheit } from './utils';

const Chart: React.FC = () => {
  const [parsedData, setParsedData] = useState<any[]>([]);
  const [chart, setChart] = useState<Line>();
  const [tempUnit, setTempUnit] = useState<'C' | 'F'>('C');

  useEffect(() => {
    if (parsedData.length > 0) {
      const plot = new Line(document.getElementById('chart-container') as HTMLElement, {
        data: parsedData,
        xField: 'time',
        yField: 'value',
        seriesField: 'type',
        xAxis: { type: 'time' },
        tooltip: {
          showMarkers: false,
          customContent: (title, items) => {
            // Custom tooltip content
          },
        },
      });

      plot.render();
      setChart(plot);
    }
  }, [parsedData]);

  const handleDataChange = (checkedValues: any) => {
    // Update chart data based on selected checkboxes
  };

  const handleTempUnitChange = (e: any) => {
    setTempUnit(e.target.value);
    // Update temperature data based on selected unit
  };

  return (
    <div>
      <div id="chart-container" style={{ height: '500px' }}></div>
      <Checkbox.Group onChange={handleDataChange}>
        {/* Add checkboxes for each data type */}
      </Checkbox.Group>
      <Radio.Group value={tempUnit} onChange={handleTempUnitChange}>
        <Radio.Button value="C">°C</Radio.Button>
        <Radio.Button value="F">°F</Radio.Button>
      </Radio.Group>
    </div>
  );
};

export default
