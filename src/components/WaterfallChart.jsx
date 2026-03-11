import { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, ReferenceLine, LabelList
} from 'recharts';

const rawData = [
  { name: '売上', value: 5000 },
  { name: '原価', value: -2800 },
  { name: '人件費', value: -800 },
  { name: '広告費', value: -400 },
  { name: '家賃', value: -300 },
  { name: '雑費', value: -200 },
];

function buildWaterfallData(raw) {
  const result = [];
  let cumulative = 0;
  for (const item of raw) {
    const base = item.value >= 0 ? cumulative : cumulative + item.value;
    result.push({
      name: item.name,
      base,
      value: Math.abs(item.value),
      raw: item.value,
      cumulative: cumulative + item.value,
    });
    cumulative += item.value;
  }
  result.push({
    name: '利益',
    base: 0,
    value: cumulative,
    raw: cumulative,
    cumulative,
    isTotal: true,
  });
  return result;
}

const data = buildWaterfallData(rawData);
const profit = data[data.length - 1].value;

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div style={{ background: '#fff', border: '1px solid #ccc', padding: '8px 12px', borderRadius: 6, fontSize: 13 }}>
      <p style={{ fontWeight: 'bold', margin: '0 0 4px' }}>{d.name}</p>
      <p style={{ margin: 0 }}>{d.raw >= 0 ? '+' : ''}{d.raw}万円</p>
      {!d.isTotal && <p style={{ margin: 0, color: '#888' }}>累計: {d.cumulative}万円</p>}
    </div>
  );
};

const renderLabel = (props) => {
  const { x, y, width, value, index } = props;
  const entry = data[index];
  if (!entry) return null;
  const label = `${entry.raw >= 0 ? '+' : ''}${entry.raw}`;
  return (
    <text x={x + width / 2} y={y - 6} textAnchor="middle" fontSize={12} fill="#333">
      {label}
    </text>
  );
};

export default function WaterfallChart() {
  const [showLabel, setShowLabel] = useState(true);
  const [showTarget, setShowTarget] = useState(true);

  return (
    <div className="chart-container">
      <h2>損益ウォーターフォール（万円）</h2>
      <div className="chart-controls">
        <label className="chart-control-check">
          <input type="checkbox" checked={showLabel} onChange={(e) => setShowLabel(e.target.checked)} />
          金額ラベル（LabelList）
        </label>
        <label className="chart-control-check">
          <input type="checkbox" checked={showTarget} onChange={(e) => setShowTarget(e.target.checked)} />
          利益目標線（ReferenceLine）
        </label>
      </div>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          {showTarget && (
            <ReferenceLine y={800} stroke="#1890ff" strokeDasharray="5 5"
              label={{ value: '利益目標 800万', fill: '#1890ff', position: 'right', fontSize: 12 }} />
          )}
          <Bar dataKey="base" stackId="waterfall" fill="transparent" />
          <Bar dataKey="value" stackId="waterfall" radius={[4, 4, 0, 0]}>
            {data.map((entry, i) => (
              <Cell
                key={i}
                fill={entry.isTotal ? '#8884d8' : entry.raw >= 0 ? '#52c41a' : '#ff4d4f'}
              />
            ))}
            {showLabel && <LabelList content={renderLabel} />}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
