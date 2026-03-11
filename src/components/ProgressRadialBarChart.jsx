import { useState } from 'react';
import {
  RadialBarChart, RadialBar, Legend, ResponsiveContainer, Tooltip
} from 'recharts';

const data = [
  { name: 'テスト', progress: 95, fill: '#8884d8' },
  { name: 'コードレビュー', progress: 82, fill: '#83a6ed' },
  { name: 'ドキュメント', progress: 68, fill: '#82ca9d' },
  { name: 'デプロイ準備', progress: 55, fill: '#ffc658' },
  { name: 'パフォーマンス', progress: 40, fill: '#ff8042' },
];

const anglePresets = [
  { value: 'half', label: '半円（180° → 0°）', start: 180, end: 0 },
  { value: 'full', label: '全円（360° → 0°）', start: 360, end: 0 },
  { value: 'quarter', label: '1/4（90° → 0°）', start: 90, end: 0 },
];

export default function ProgressRadialBarChart() {
  const [anglePreset, setAnglePreset] = useState('half');
  const [showBackground, setShowBackground] = useState(true);

  const preset = anglePresets.find((p) => p.value === anglePreset);

  return (
    <div className="chart-container">
      <h2>プロジェクト進捗（放射状バー）</h2>
      <div className="chart-controls">
        <label className="chart-control-group">
          <span>角度:</span>
          <select value={anglePreset} onChange={(e) => setAnglePreset(e.target.value)}>
            {anglePresets.map((p) => (
              <option key={p.value} value={p.value}>{p.label}</option>
            ))}
          </select>
        </label>
        <label className="chart-control-check">
          <input type="checkbox" checked={showBackground} onChange={(e) => setShowBackground(e.target.checked)} />
          背景バー（background）
        </label>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="15%"
          outerRadius="90%"
          barSize={18}
          data={data}
          startAngle={preset.start}
          endAngle={preset.end}
        >
          <RadialBar
            background={showBackground}
            dataKey="progress"
            label={{ position: 'insideStart', fill: '#fff', fontSize: 11 }}
          />
          <Legend
            iconSize={10}
            layout="vertical"
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{ fontSize: 12 }}
          />
          <Tooltip formatter={(value) => [`${value}%`, '進捗']} />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
