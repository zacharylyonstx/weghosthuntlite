import React from 'react';
import { Layout } from 'antd';
import UploadCsv from './UploadCsv';
import Chart from './Chart';

const { Header, Content } = Layout;

const Page: React.FC = () => {
  return (
    <Layout>
      <Header style={{ backgroundColor: '#1890ff', padding: '0 50px' }}>
        <div style={{ color: 'white', fontSize: '24px' }}>weghosthunt.com</div>
      </Header>
      <Content style={{ padding: '50px', backgroundColor: '#f0f2f5' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <UploadCsv />
        </div>
        <Chart />
      </Content>
    </Layout>
  );
};

export default Page;
