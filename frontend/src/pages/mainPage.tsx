// src/App.tsx
import React from "react";
import { Upload, Button, Row, Col, Typography } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Papa from "papaparse";
import { useDispatch } from "react-redux";
import CombinedChart from "../components/combinedCharts";
import IndividualCharts from "../components/individualCharts";

const MainPage: React.FC = () => {
  const dispatch = useDispatch();

  const handleFileUpload = (file: File) => {
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        dispatch({ type: "SET_DATA", data: results.data });
      }
    });
    return false;
  };

  return (
    <div>
      <Row>
        <Col span={24}>
          <Typography.Title>CSV Data Visualization</Typography.Title>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Upload
            accept=".csv"
            showUploadList={false}
            beforeUpload={handleFileUpload}
          >
            <Button icon={<UploadOutlined />}>Upload CSV</Button>
          </Upload>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <CombinedChart />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <IndividualCharts />
        </Col>
      </Row>
    </div>
  );
};

export default MainPage;