// @ts-nocheck
// import React from 'react';
// import { Upload, Button } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';

// // const UploadCsv: React.FC = () => {
// //   const handleChange = (info: any) => {
// //     if (info.file.status === 'done') {
// //       console.log('Upload successful:', info.file);
// //     }
// //   };

// //   return (
// //     <Upload
// //       accept=".csv"
// //       showUploadList={false}
// //       onChange={handleChange}
// //     >
// //       <Button icon={<UploadOutlined />}>Upload EDI_LOG.csv</Button>
// //     </Upload>
// //   );
// // };

// // export default UploadCsv;


import React from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const UploadCsv: React.FC = (props) => {
  
  const handleChange = (info: any) => {
    console.log(info)
    if (info.file.status === 'done') {
      console.log('Upload successful:', info.file);
      const reader = new FileReader();
      reader.onload = () => {
        const csvData = reader.result as string;
        console.log('CSV data:', csvData);

        // TODO: Process the CSV data and update the graphs
      };
      reader.readAsText(info.file.originFileObj);
    }
  };

  const customRequest = ({ file, onSuccess }: { file: any; onSuccess: any }) => {
    setTimeout(() => {
      onSuccess('ok');
    }, 0);
  };

  return (
    <Upload
      accept=".csv"
      showUploadList={false}
      onChange={props.handleFileUpload}
      // @ts-ignore
      customRequest={customRequest}
    >
      <Button icon={<UploadOutlined />}>Upload EDI_LOG.csv</Button>
    </Upload>
  );
};

export default UploadCsv;