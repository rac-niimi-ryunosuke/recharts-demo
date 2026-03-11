import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { quarter: 'Q1', 東京: 1500, 大阪: 1100, 名古屋: 700, 福岡: 500 },
  { quarter: 'Q2', 東京: 1800, 大阪: 1200, 名古屋: 800, 福岡: 550 },
  { quarter: 'Q3', 東京: 2100, 大阪: 1400, 名古屋: 900, 福岡: 600 },
  { quarter: 'Q4', 東京: 2500, 大阪: 1600, 名古屋: 1000, 福岡: 700 },
];

export default function StackedBarChart() {
  return (
    <div className="chart-container">
      <h2>エリア別四半期売上（積み上げ棒）</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="quarter" />
          <YAxis />
          <Tooltip formatter={(value) => [`${value}万円`]} />
          <Legend />
          <Bar dataKey="東京" stackId="a" fill="#8884d8" radius={[0, 0, 0, 0]} />
          <Bar dataKey="大阪" stackId="a" fill="#82ca9d" />
          <Bar dataKey="名古屋" stackId="a" fill="#ffc658" />
          <Bar dataKey="福岡" stackId="a" fill="#ff8042" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
