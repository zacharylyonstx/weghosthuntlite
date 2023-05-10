// src/components/CombinedChart.tsx
import React from "react";
import { useSelector } from "react-redux";
import { Line } from "@ant-design/charts";
import dayjs from 'dayjs';
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const CombinedChart: React.FC = () => {
    const data = useSelector((state: any) => state.data);
    const chartData = data.map((row: any) => {
        try {
            return {
                ...row,
                Time: dayjs(row.Time, 'HH:mm:ss').toDate(),
                Mark: row.Mark === '1' ? 'Marked' : 'Unmarked',
            };
        } catch (error) {
            console.error(`Error parsing time: ${row.Time}`);
            throw error;
        }
    });

    console.log(chartData)

    const config = {
        data: chartData,
        xField: "Time",
        yField: "value",
        seriesField: "category",
        xAxis: { type: "time", tickCount: 10 },
        yAxis: { label: { autoRotate: false } },
        legend: { position: "top" },
        tooltip: { shared: true, showMarkers: false },
        point: {
            size: 2,
            shape: "circle",
            //   @ts-ignore
            style: (item) => {
                return {
                    r: item.Mark === "Marked" ? 4 : 2,
                    stroke: item.Mark === "Marked" ? "black" : "transparent"
                };
            }
        },
        theme: "dark",
        responsive: true
    };

    return (
        <div>
            <h3>Combined Chart</h3>
            {/* @ts-ignore */}
            <Line {...config} />
        </div>
    );
};

export default CombinedChart;
