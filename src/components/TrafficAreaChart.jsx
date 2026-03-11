import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { month: '1月', 検索: 1200, SNS: 800, 直接: 400, 広告: 600 },
  { month: '2月', 検索: 1350, SNS: 900, 直接: 420, 広告: 550 },
  { month: '3月', 検索: 1500, SNS: 1100, 直接: 450, 広告: 700 },
  { month: '4月', 検索: 1400, SNS: 1200, 直接: 480, 広告: 650 },
  { month: '5月', 検索: 1600, SNS: 1350, 直接: 500, 広告: 800 },
  { month: '6月', 検索: 1550, SNS: 1400, 直接: 520, 広告: 750 },
  { month: '7月', 検索: 1700, SNS: 1500, 直接: 550, 広告: 900 },
  { month: '8月', 検索: 1650, SNS: 1600, 直接: 530, 広告: 850 },
  { month: '9月', 検索: 1800, SNS: 1450, 直接: 560, 広告: 950 },
  { month: '10月', 検索: 1900, SNS: 1550, 直接: 580, 広告: 1000 },
  { month: '11月', 検索: 2000, SNS: 1700, 直接: 600, 広告: 1100 },
  { month: '12月', 検索: 2200, SNS: 1900, 直接: 650, 広告: 1200 },
];

export default function TrafficAreaChart() {
  return (
    <div className="chart-container">
      <h2>流入元別トラフィック（積み上げ）</h2>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="検索" stackId="1" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Area type="monotone" dataKey="SNS" stackId="1" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
          <Area type="monotone" dataKey="直接" stackId="1" stroke="#ffc658" fill="#ffc658" fillOpacity={0.6} />
          <Area type="monotone" dataKey="広告" stackId="1" stroke="#ff7c7c" fill="#ff7c7c" fillOpacity={0.6} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
