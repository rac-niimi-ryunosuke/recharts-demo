import { useState } from 'react';
import {
  PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';

const COLORS = {
  low: '#ff4d4f',
  mid: '#faad14',
  high: '#52c41a',
};

function getColor(value) {
  if (value < 40) return COLORS.low;
  if (value < 70) return COLORS.mid;
  return COLORS.high;
}

export default function GaugeChart() {
  const [value, setValue] = useState(72);

  const gaugeData = [
    { name: '達成', value },
    { name: '残り', value: 100 - value },
  ];

  return (
    <div className="chart-container">
      <h2>KPI ゲージチャート</h2>
      <div className="chart-controls">
        <label className="chart-control-group">
          <span>達成率: {value}%</span>
          <input type="range" min={0} max={100} value={value} onChange={(e) => setValue(Number(e.target.value))} />
        </label>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={gaugeData}
            cx="50%" cy="70%"
            startAngle={180}
            endAngle={0}
            innerRadius={80}
            outerRadius={120}
            dataKey="value"
            stroke="none"
          >
            <Cell fill={getColor(value)} />
            <Cell fill="#f0f0f0" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div style={{ textAlign: 'center', marginTop: -60, fontSize: 36, fontWeight: 'bold', color: getColor(value) }}>
        {value}%
      </div>
      <div style={{ textAlign: 'center', fontSize: 14, color: '#888', marginTop: 4 }}>
        目標達成率
      </div>
    </div>
  );
}
