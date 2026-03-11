import { useState } from 'react';
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
  const [layout, setLayout] = useState('horizontal');
  const [rounded, setRounded] = useState(true);
  const [showGrid, setShowGrid] = useState(true);

  const isVertical = layout === 'vertical';

  return (
    <div className="chart-container">
      <h2>月別売上データ（万円）</h2>
      <div className="chart-controls">
        <label className="chart-control-group">
          <span>レイアウト:</span>
          <select value={layout} onChange={(e) => setLayout(e.target.value)}>
            <option value="horizontal">横軸に月（通常）</option>
            <option value="vertical">縦軸に月（横棒）</option>
          </select>
        </label>
        <label className="chart-control-check">
          <input type="checkbox" checked={rounded} onChange={(e) => setRounded(e.target.checked)} />
          角丸 radius
        </label>
        <label className="chart-control-check">
          <input type="checkbox" checked={showGrid} onChange={(e) => setShowGrid(e.target.checked)} />
          グリッド線
        </label>
      </div>
      <ResponsiveContainer width="100%" height={isVertical ? 500 : 300}>
        <BarChart data={data} layout={isVertical ? 'vertical' : 'horizontal'} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          {showGrid && <CartesianGrid strokeDasharray="3 3" />}
          {isVertical ? (
            <>
              <XAxis type="number" />
              <YAxis dataKey="month" type="category" width={40} />
            </>
          ) : (
            <>
              <XAxis dataKey="month" />
              <YAxis />
            </>
          )}
          <Tooltip formatter={(value) => [`${value}万円`, '売上']} />
          <Legend />
          <Bar dataKey="売上" fill="#8884d8" radius={rounded ? (isVertical ? [0, 4, 4, 0] : [4, 4, 0, 0]) : 0} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
