import React from 'react';
import BaseGraphComponent from './baseGraphComponent';

interface CombinedGraphProps {
  data: any[];
  selectedDataTypes: string[];
}

const CombinedGraph: React.FC<CombinedGraphProps> = ({ data, selectedDataTypes }) => {
  const combinedData = data.filter((item) => selectedDataTypes.includes(item.type));

  return (
    <BaseGraphComponent
      data={combinedData}
      yField="value"
      color={(d) => {
        // Map data types to specific colors
      }}
    />
  );
};

export default CombinedGraph;
