import { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ReferenceLine, ReferenceArea, ResponsiveContainer
} from 'recharts';

const data = [
  { month: '1月', KPI: 82 },
  { month: '2月', KPI: 75 },
  { month: '3月', KPI: 91 },
  { month: '4月', KPI: 68 },
  { month: '5月', KPI: 85 },
  { month: '6月', KPI: 78 },
  { month: '7月', KPI: 95 },
  { month: '8月', KPI: 88 },
  { month: '9月', KPI: 62 },
  { month: '10月', KPI: 73 },
  { month: '11月', KPI: 90 },
  { month: '12月', KPI: 96 },
];

export default function ReferenceLineChart() {
  const [showTarget, setShowTarget] = useState(true);
  const [showDanger, setShowDanger] = useState(true);
  const [showHighlight, setShowHighlight] = useState(true);

  return (
    <div className="chart-container">
      <h2>KPI 推移と参照線</h2>
      <div className="chart-controls">
        <label className="chart-control-check">
          <input type="checkbox" checked={showTarget} onChange={(e) => setShowTarget(e.target.checked)} />
          目標線（ReferenceLine）
        </label>
        <label className="chart-control-check">
          <input type="checkbox" checked={showDanger} onChange={(e) => setShowDanger(e.target.checked)} />
          危険ゾーン（ReferenceArea）
        </label>
        <label className="chart-control-check">
          <input type="checkbox" checked={showHighlight} onChange={(e) => setShowHighlight(e.target.checked)} />
          好調期間ハイライト
        </label>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis domain={[50, 100]} />
          <Tooltip formatter={(v) => [`${v}%`, 'KPI']} />
          <Legend />
          {showDanger && (
            <ReferenceArea y1={50} y2={70} fill="#ff4d4f" fillOpacity={0.1} label={{ value: '危険', fill: '#ff4d4f', fontSize: 12 }} />
          )}
          {showHighlight && (
            <ReferenceArea x1="6月" x2="8月" fill="#52c41a" fillOpacity={0.1} label={{ value: '好調期間', fill: '#52c41a', fontSize: 12 }} />
          )}
          {showTarget && (
            <ReferenceLine y={80} stroke="#1890ff" strokeDasharray="5 5" label={{ value: '目標 80%', fill: '#1890ff', position: 'right', fontSize: 12 }} />
          )}
          <Line type="monotone" dataKey="KPI" stroke="#8884d8" strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
