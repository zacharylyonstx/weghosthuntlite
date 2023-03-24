// @ts-nocheck
import React, { useState } from 'react';
import { Layout } from 'antd';
import UploadCsv from '../../components/UploadCsv';
import CombinedGraph from '../../components/graph/CombinedGraph';
import SingleLineGraph from '../../components/graph/SingleLineGraph';
import { processData } from '../../utils/processData';

const { Header, Content } = Layout;

const data = `00:00:01,0.0,65.5,29.0,996.4,2,0,
00:00:02,0.0,65.5,28.9,996.3,30,0,
00:00:03,0.3,65.5,28.9,996.3,51,0,
00:00:04,0.0,65.5,28.8,996.4,5,0,
00:00:05,0.0,65.5,28.7,996.4,451,1,
00:00:06,0.0,65.5,28.7,996.4,8,0,
00:00:07,0.0,65.5,28.7,996.4,11,0,
00:00:08,0.0,65.5,28.6,996.4,12,0,
00:00:09,0.0,65.4,28.6,996.4,9,0,
00:15:01,0.0,54.8,30.0,996.4,13,0,
00:15:02,0.0,54.8,29.9,996.4,2,0,`;

const Page: React.FC = () => {

  const [csvData, setCsvData] = useState('');

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCsvData(reader.result as string);
      };
      reader.readAsText(file);
    }
  };

  const processedData = csvData ? processData(csvData) : [];

  const columnData = (type) => {
    return processedData.filter((item) => item.type === type);
  };

  const columnNames = ['EMF', 'Temperature', 'Humidity', 'Pressure (Bar)', 'Geophone', 'Mark'];

  return (
    <Layout>
      <Header style={{ backgroundColor: '#1890ff', padding: '0 50px' }}>
        <div style={{ color: 'white', fontSize: '24px' }}>weghosthunt.com</div>
      </Header>
      <Content style={{ padding: '50px', backgroundColor: '#f0f2f5' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <UploadCsv handleFileUpload={handleFileUpload} />
        </div>
        {csvData && 
          <><div style={{ height: "100%", width: "100%" }}>
          <CombinedGraph processedData={processedData} />
        </div>
        <div>
          {columnNames.map((columnName) => (
            <SingleLineGraph key={columnName} data={columnData(columnName)} columnName={columnName} />
          ))}
        </div>
        </>}
      </Content>
    </Layout>
  );
};

export default Page;