import { useState } from 'react';
import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const outerData = [
  { name: '食品', value: 35 },
  { name: '衣料品', value: 20 },
  { name: '家電', value: 18 },
  { name: 'その他', value: 27 },
];

const innerData = [
  { name: '生鮮', value: 15 },
  { name: '加工品', value: 12 },
  { name: '飲料', value: 8 },
  { name: 'メンズ', value: 8 },
  { name: 'レディース', value: 7 },
  { name: '子供服', value: 5 },
  { name: 'PC', value: 10 },
  { name: 'スマホ', value: 8 },
  { name: '書籍', value: 12 },
  { name: 'スポーツ', value: 10 },
  { name: '雑貨', value: 5 },
];

const OUTER_COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const INNER_COLORS = ['#0077E6', '#0099FF', '#33AAFF', '#00B38A', '#00D4A0', '#33E6B8', '#E6A800', '#FFD633', '#E65C00', '#FF8533', '#FFB366'];

export default function NestedPieChart() {
  const [showLabel, setShowLabel] = useState(true);
  const [innerRadius, setInnerRadius] = useState(0);

  return (
    <div className="chart-container">
      <h2>カテゴリ別売上（二重円グラフ）</h2>
      <div className="chart-controls">
        <label className="chart-control-check">
          <input type="checkbox" checked={showLabel} onChange={(e) => setShowLabel(e.target.checked)} />
          ラベル表示
        </label>
        <label className="chart-control-group">
          <span>中心の穴:</span>
          <select value={innerRadius} onChange={(e) => setInnerRadius(Number(e.target.value))}>
            <option value={0}>なし</option>
            <option value={25}>小（25px）</option>
            <option value={40}>大（40px）</option>
          </select>
        </label>
      </div>
      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={innerData}
            cx="50%" cy="50%"
            innerRadius={innerRadius}
            outerRadius={70}
            dataKey="value"
            label={showLabel ? ({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%` : false}
            labelLine={showLabel}
          >
            {innerData.map((_, i) => (
              <Cell key={i} fill={INNER_COLORS[i]} />
            ))}
          </Pie>
          <Pie
            data={outerData}
            cx="50%" cy="50%"
            innerRadius={80}
            outerRadius={110}
            dataKey="value"
            label={showLabel ? ({ name }) => name : false}
            labelLine={showLabel}
          >
            {outerData.map((_, i) => (
              <Cell key={i} fill={OUTER_COLORS[i]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => [`${value}%`, '割合']} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
