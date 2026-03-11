import { useState } from 'react';
import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { name: '食品', value: 35 },
  { name: '衣料品', value: 20 },
  { name: '家電', value: 18 },
  { name: '書籍', value: 12 },
  { name: 'スポーツ', value: 10 },
  { name: 'その他', value: 5 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

export default function CategoryPieChart() {
  const [innerRadius, setInnerRadius] = useState(0);
  const [showLabel, setShowLabel] = useState(true);

  return (
    <div className="chart-container">
      <h2>カテゴリ別売上割合</h2>
      <div className="chart-controls">
        <label className="chart-control-group">
          <span>形状:</span>
          <select value={innerRadius} onChange={(e) => setInnerRadius(Number(e.target.value))}>
            <option value={0}>パイ（innerRadius: 0）</option>
            <option value={50}>ドーナツ（innerRadius: 50）</option>
            <option value={70}>細ドーナツ（innerRadius: 70）</option>
          </select>
        </label>
        <label className="chart-control-check">
          <input type="checkbox" checked={showLabel} onChange={(e) => setShowLabel(e.target.checked)} />
          ラベル表示
        </label>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={showLabel}
            label={showLabel ? ({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%` : false}
            outerRadius={100}
            innerRadius={innerRadius}
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => [`${value}%`, '割合']} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
