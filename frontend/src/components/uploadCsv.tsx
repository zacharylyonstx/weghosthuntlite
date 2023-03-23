import React from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const UploadCsv: React.FC = () => {
  const handleChange = (info: any) => {
    if (info.file.status === 'done') {
      console.log('Upload successful:', info.file);
    }
  };

  return (
    <Upload
      accept=".csv"
      showUploadList={false}
      onChange={handleChange}
    >
      <Button icon={<UploadOutlined />}>Upload EDI_LOG.csv</Button>
    </Upload>
  );
};

export default UploadCsv;
