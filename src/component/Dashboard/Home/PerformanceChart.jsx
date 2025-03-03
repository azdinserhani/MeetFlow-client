import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import DateRangeSelect from "./DateRangeSelect";

const data = [
  { date: "01", thisMonth: 7, lastMonth: 6 },
  { date: "02", thisMonth: 6, lastMonth: 5 },
  { date: "03", thisMonth: 7, lastMonth: 6 },
  { date: "04", thisMonth: 8, lastMonth: 5 },
  { date: "05", thisMonth: 10, lastMonth: 7 },
  { date: "06", thisMonth: 9, lastMonth: 6 },
  { date: "07", thisMonth: 11, lastMonth: 8 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black text-white p-3 rounded-lg shadow-lg">
        <p className="font-bold">{`0${label} May 2023`}</p>
        <p className="text-blue-400">This month: {payload[0].value}h</p>
        <p className="text-orange-400">Last month: {payload[1].value}h</p>
      </div>
    );
  }
  return null;
};

const PerformanceChart = () => {
  return (
      <div className="w-full  p-5 rounded-lg ">
          <div className="flex justify-between mb-12">
              <h2 className="text-lg font-semibold mb-2">Performance</h2>  
              <DateRangeSelect />
          </div>
      
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="thisMonth"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="lastMonth"
            stroke="#f97316"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
