import {
  ComposedChart, Bar, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { month: '1月', 売上: 420, 利益: 120, 前年比: 95 },
  { month: '2月', 売上: 380, 利益: 100, 前年比: 88 },
  { month: '3月', 売上: 510, 利益: 160, 前年比: 105 },
  { month: '4月', 売上: 470, 利益: 140, 前年比: 102 },
  { month: '5月', 売上: 620, 利益: 200, 前年比: 118 },
  { month: '6月', 売上: 580, 利益: 180, 前年比: 112 },
  { month: '7月', 売上: 710, 利益: 240, 前年比: 125 },
  { month: '8月', 売上: 690, 利益: 220, 前年比: 120 },
  { month: '9月', 売上: 530, 利益: 150, 前年比: 98 },
  { month: '10月', 売上: 610, 利益: 190, 前年比: 110 },
  { month: '11月', 売上: 720, 利益: 250, 前年比: 128 },
  { month: '12月', 売上: 850, 利益: 300, 前年比: 135 },
];

export default function SalesComposedChart() {
  return (
    <div className="chart-container">
      <h2>売上・利益・前年比（複合グラフ）</h2>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" domain={[70, 150]} unit="%" />
          <Tooltip />
          <Legend />
          <Area yAxisId="left" type="monotone" dataKey="利益" fill="#82ca9d" stroke="#82ca9d" fillOpacity={0.3} />
          <Bar yAxisId="left" dataKey="売上" fill="#8884d8" radius={[4, 4, 0, 0]} />
          <Line yAxisId="right" type="monotone" dataKey="前年比" stroke="#ff7300" strokeWidth={2} dot={{ r: 4 }} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
