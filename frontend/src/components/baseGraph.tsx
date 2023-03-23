import React, { useEffect } from 'react';
import { Line } from '@antv/g2plot';

interface BaseGraphProps {
  data: any[];
  yField: string;
  color: string;
  unit?: string;
  onTooltipFormat?: (value: number) => string | number;
}

const BaseGraph: React.FC<BaseGraphProps> = ({
  data,
  yField,
  color,
  unit = '',
  onTooltipFormat = (value: number) => value,
}) => {
  useEffect(() => {
    if (data.length > 0) {
      const plot = new Line(document.getElementById(yField) as HTMLElement, {
        data,
        xField: 'time',
        yField: 'value',
        seriesField: 'type',
        color,
        xAxis: { type: 'time' },
        tooltip: {
          showMarkers: false,
          customContent: (title, items) => {
            const item = items[0];
            const value = onTooltipFormat(item?.value);
            return `<div>${title} ${yField}: ${value}${unit}</div>`;
          },
        },
      });

      plot.render();
    }
  }, [data, yField, color, unit, onTooltipFormat]);

  return <div id={yField} style={{ height: '500px' }}></div>;
};

export default BaseGraph;
