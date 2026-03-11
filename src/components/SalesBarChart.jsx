import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { month: '1月', 売上: 420 },
  { month: '2月', 売上: 380 },
  { month: '3月', 売上: 510 },
  { month: '4月', 売上: 470 },
  { month: '5月', 売上: 620 },
  { month: '6月', 売上: 580 },
  { month: '7月', 売上: 710 },
  { month: '8月', 売上: 690 },
  { month: '9月', 売上: 530 },
  { month: '10月', 売上: 610 },
  { month: '11月', 売上: 720 },
  { month: '12月', 売上: 850 },
];

export default function SalesBarChart() {
  return (
    <div className="chart-container">
      <h2>月別売上データ（万円）</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip formatter={(value) => [`${value}万円`, '売上']} />
          <Legend />
          <Bar dataKey="売上" fill="#8884d8" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
