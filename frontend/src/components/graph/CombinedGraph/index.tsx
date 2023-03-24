// @ts-nocheck
import React from 'react';
import { Line } from '@ant-design/charts';
import { Tooltip } from 'antd';
import dayjs from 'dayjs';
import {processData} from '../../../utils/processData'


const CombinedLineGraph = ({processedData}) => {
    
    const config = {
        height: 400,
        data: processedData,
        xField: 'time',
        yField: 'value',
        seriesField: 'type',
        xAxis: { type: 'time', label: { formatter: (time) => time } },
        yAxis: {
            label: {
                formatter: (value) => `${value}`,
            },
        },
        tooltip: {
            showMarkers: false,
            shared: true,
            customContent: (title, items) => {
                return (
                    <>
                        <div>{title}</div>
                        {items.map((item) => (
                            <Tooltip key={item.name} title={`${item.name}: ${item.value}`}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '2px',
                                    }}
                                >
                                    <div
                                        style={{
                                            width: '10px',
                                            height: '10px',
                                            background: item.color,
                                            marginRight: '8px',
                                        }}
                                    ></div>
                                    {item.name}: {item.value}
                                </div>
                            </Tooltip>
                        ))}
                    </>
                );
            },
        },
        legend: { itemName: { formatter: (text) => text } },
        slider: {
            start: 0,
            end: 1,
            trendCfg: { isArea: true },
        },
        scrollbar: {
            type: 'horizontal',
        },
    };


    return (
        <Line {...config} />
    );

};

export default CombinedLineGraph;
