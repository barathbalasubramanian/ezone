import React, { PureComponent } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
//   CustomizedAxisTick,
//   defs,
//   linearGradient,
//   stop,
} from 'recharts';

const data = [
  { month: 'Feb', uv: 250, pv: 150 },
  { month: 'Mar', uv: 100, pv: 50 },
  { month: 'Apr', uv: 10, pv: 200 },
  { month: 'May', uv: 200, pv: 100 },
  { month: 'Jun', uv: 250, pv: 250 },
  { month: 'Jul', uv: 170, pv: 120 },
  { month: 'Aug', uv: 250, pv: 180 },
  // { month: 'Sep', uv: 220 },
  // { month: 'Oct', uv: 370 },
  // { month: 'Nov', uv: 100 },
  // { month: 'Dec', uv: 204 },
];

const CustomYAxisTick = (props) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <circle cx={10} cy={-3} r={5} fill="orange" />
      <text dx={-20} dy={0} textAnchor="middle" fill="grey" fontSize={14}>
        {payload.value}
      </text>
    </g>
  );
};

const CustomXAxisTick = (props) => {
  const { x, y, payload } = props;
  const radius = 5; // radius of the circle

  return (
    <g transform={`translate(${x},${y})`}>
      <circle cx={10} cy={3} r={radius} fill="orange" />
      <text dx={10} dy={35} textAnchor="middle" fill="grey" fontSize={14}>
        {payload.value}
      </text>
    </g>
  );
};

class ChartContainer extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width={500} height={300}>
        <AreaChart
          width={500}
          height="100%"
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 30,
          }}
        >
          <defs>
            <linearGradient id="areaGradientOrange" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FFA500" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#FFA500" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="areaGradientBlue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0000FF" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#0000FF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="none" />
          <XAxis dataKey="month" axisLine={false} tickLine={false} tick={<CustomXAxisTick />} interval={0} />
          <YAxis tick={<CustomYAxisTick />} axisLine={false} tickLine={false} tickCount={5} />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="uv"
            stroke="orange"
            fill="url(#areaGradientOrange)"
            strokeWidth={2}
          />

          <Area
            type="monotone"
            dataKey="pv"
            stroke="#0000FF"
            fill="url(#areaGradientBlue)"
            strokeWidth={2}
          />
          <Legend
            verticalAlign="bottom"
            align="center"
            height={36}
            wrapperStyle={{ bottom: 0, marginTop: 20 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
export default ChartContainer;
