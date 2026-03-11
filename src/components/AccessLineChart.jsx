import { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { month: '1月', PC: 4000, スマホ: 2400, タブレット: 1200 },
  { month: '2月', PC: 3800, スマホ: 2600, タブレット: 1100 },
  { month: '3月', PC: 4200, スマホ: 2900, タブレット: 1300 },
  { month: '4月', PC: 4500, スマホ: 3100, タブレット: 1400 },
  { month: '5月', PC: 4300, スマホ: 3400, タブレット: 1500 },
  { month: '6月', PC: 4100, スマホ: 3600, タブレット: 1350 },
  { month: '7月', PC: 4600, スマホ: 3800, タブレット: 1600 },
  { month: '8月', PC: 4400, スマホ: 4000, タブレット: 1550 },
  { month: '9月', PC: 4700, スマホ: 3500, タブレット: 1450 },
  { month: '10月', PC: 4900, スマホ: 3700, タブレット: 1700 },
  { month: '11月', PC: 5100, スマホ: 3900, タブレット: 1800 },
  { month: '12月', PC: 5300, スマホ: 4200, タブレット: 1900 },
];

const lineTypes = [
  { value: 'monotone', label: 'monotone（滑らか）' },
  { value: 'linear', label: 'linear（直線）' },
  { value: 'step', label: 'step（階段）' },
  { value: 'stepBefore', label: 'stepBefore' },
  { value: 'stepAfter', label: 'stepAfter' },
  { value: 'basis', label: 'basis（B-スプライン）' },
  { value: 'natural', label: 'natural（自然スプライン）' },
];

export default function AccessLineChart() {
  const [lineType, setLineType] = useState('monotone');

  return (
    <div className="chart-container">
      <h2>月別アクセス数の推移</h2>
      <div className="line-type-selector">
        <label>補間タイプ: </label>
        <select value={lineType} onChange={(e) => setLineType(e.target.value)}>
          {lineTypes.map((t) => (
            <option key={t.value} value={t.value}>{t.label}</option>
          ))}
        </select>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type={lineType} dataKey="PC" stroke="#8884d8" strokeWidth={2} dot={{ r: 4 }} />
          <Line type={lineType} dataKey="スマホ" stroke="#82ca9d" strokeWidth={2} dot={{ r: 4 }} />
          <Line type={lineType} dataKey="タブレット" stroke="#ffc658" strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
