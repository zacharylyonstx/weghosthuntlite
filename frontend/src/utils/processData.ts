// @ts-nocheck
import dayjs from 'dayjs'

export const processData = (rawData) => {
    const result = [];
    rawData.split('\n').forEach((line) => {
        const [time, emf, temp, humidity, pressure, geophone, mark] = line.split(',');
        const formattedTime = dayjs(`2000-01-01T${time}`).toISOString();
        result.push(
            { time: formattedTime, value: parseFloat(emf), type: 'EMF' },
            { time: formattedTime, value: parseFloat(temp), type: 'Temperature' },
            { time: formattedTime, value: parseFloat(humidity), type: 'Humidity' },
            { time: formattedTime, value: (parseFloat(pressure) / 100), type: 'Pressure (Bar)' },
            { time: formattedTime, value: parseInt(geophone), type: 'Geophone' },
            { time: formattedTime, value: parseInt(mark), type: 'Mark' },
        );
    });
    return result;
};