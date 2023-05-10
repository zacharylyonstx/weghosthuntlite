// src/components/IndividualCharts.tsx
import React from "react";
import { useSelector } from "react-redux";
import { Line } from "@ant-design/charts";
import { Row, Col } from "antd";
import dayjs from 'dayjs';
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const IndividualCharts: React.FC = () => {
    const data = useSelector((state: any) => state.data);
    const parsedData = data.map((row: any) => {
        try {
          return {
            ...row,
            Time: dayjs(row.Time, 'HH:mm:ss').toDate(),
          };
        } catch (error) {
          console.error(`Error parsing time: ${row.Time}`);
          throw error;
        }
      });
      


    const fields = [
        "EMF",
        "Temperature",
        "Humidity",
        "Pressure",
        "Geophone"
    ];

    const charts = fields.map((field) => {
        const config = {
            data: parsedData,
            xField: "Time",
            yField: field,
            xAxis: { type: "time", tickCount: 10 },
            yAxis: { label: { autoRotate: false } },
            point: {
                size: 2,
                shape: "circle",
                style: (item: any) => {
                    return {
                        r: item.Mark === "1" ? 4 : 2,
                        stroke: item.Mark === "1" ? "black" : "transparent"
                    };
                }
            },
            theme: "dark",
            responsive: true
        };

        return (
            <Col key={field} span={12}>
                <h3>{field} Chart</h3>
                <Line {...config} />
            </Col>
        );
    });

    return (
        <div>
            <h3>Individual Charts</h3>
            <Row>{charts}</Row>
        </div>
    );
};

export default IndividualCharts;
