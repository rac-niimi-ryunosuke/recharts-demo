import { useState } from 'react';
import {
  ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const rawData = [
  { date: '3/1',  open: 28000, close: 28300, high: 28500, low: 27800 },
  { date: '3/2',  open: 28300, close: 27900, high: 28400, low: 27700 },
  { date: '3/3',  open: 27900, close: 28100, high: 28200, low: 27600 },
  { date: '3/4',  open: 28100, close: 28500, high: 28700, low: 28000 },
  { date: '3/5',  open: 28500, close: 28200, high: 28600, low: 28000 },
  { date: '3/8',  open: 28200, close: 28600, high: 28800, low: 28100 },
  { date: '3/9',  open: 28600, close: 28400, high: 28700, low: 28200 },
  { date: '3/10', open: 28400, close: 28900, high: 29000, low: 28300 },
  { date: '3/11', open: 28900, close: 29200, high: 29400, low: 28800 },
  { date: '3/12', open: 29200, close: 28800, high: 29300, low: 28600 },
  { date: '3/15', open: 28800, close: 29100, high: 29200, low: 28700 },
  { date: '3/16', open: 29100, close: 28700, high: 29200, low: 28500 },
  { date: '3/17', open: 28700, close: 29000, high: 29100, low: 28600 },
  { date: '3/18', open: 29000, close: 29400, high: 29600, low: 28900 },
  { date: '3/19', open: 29400, close: 29100, high: 29500, low: 28900 },
  { date: '3/22', open: 29100, close: 29500, high: 29700, low: 29000 },
  { date: '3/23', open: 29500, close: 29300, high: 29600, low: 29100 },
  { date: '3/24', open: 29300, close: 29700, high: 29800, low: 29200 },
  { date: '3/25', open: 29700, close: 29400, high: 29800, low: 29200 },
  { date: '3/26', open: 29400, close: 29800, high: 30000, low: 29300 },
];

const yOffset = Math.min(...rawData.map(d => d.low)) - 300;

const data = rawData.map(d => {
  const isUp = d.close >= d.open;
  const bodyBottom = Math.min(d.open, d.close);
  const bodyHeight = Math.abs(d.close - d.open);
  const wickUp = d.high - Math.max(d.open, d.close);
  const wickDown = Math.min(d.open, d.close) - d.low;
  return {
    ...d,
    isUp,
    base: bodyBottom - yOffset,
    body: bodyHeight || 1,
    errorUp: wickUp,
    errorDown: wickDown,
  };
});

const CandleShape = (props) => {
  const { x, y, width, height, payload } = props;
  if (!payload || !height) return null;
  const color = payload.isUp ? '#52c41a' : '#ff4d4f';
  const cx = x + width / 2;
  const pxPerUnit = height / payload.body;
  const wickUpPx = payload.errorUp * pxPerUnit;
  const wickDownPx = payload.errorDown * pxPerUnit;
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill={color} />
      <line x1={cx} y1={y} x2={cx} y2={y - wickUpPx} stroke={color} strokeWidth={1.5} />
      <line x1={cx} y1={y + height} x2={cx} y2={y + height + wickDownPx} stroke={color} strokeWidth={1.5} />
    </g>
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  const color = d.isUp ? '#52c41a' : '#ff4d4f';
  return (
    <div style={{ background: '#fff', border: '1px solid #ccc', padding: '8px 12px', borderRadius: 6, fontSize: 13 }}>
      <p style={{ fontWeight: 'bold', margin: '0 0 4px' }}>{d.date}</p>
      <p style={{ margin: 0 }}>始値: {d.open.toLocaleString()}円</p>
      <p style={{ margin: 0, color, fontWeight: 'bold' }}>終値: {d.close.toLocaleString()}円</p>
      <p style={{ margin: 0 }}>高値: {d.high.toLocaleString()}円</p>
      <p style={{ margin: 0 }}>安値: {d.low.toLocaleString()}円</p>
      <p style={{ margin: 0, color }}>{d.isUp ? '▲' : '▼'} {Math.abs(d.close - d.open).toLocaleString()}円</p>
    </div>
  );
};

export default function CandlestickChart() {
  const [showGrid, setShowGrid] = useState(true);

  return (
    <div className="chart-container">
      <h2>株価ローソク足チャート</h2>
      <div className="chart-controls">
        <label className="chart-control-check">
          <input type="checkbox" checked={showGrid} onChange={(e) => setShowGrid(e.target.checked)} />
          グリッド線
        </label>
        <span style={{ fontSize: 13, color: '#888' }}>
          <span style={{ color: '#52c41a' }}>■</span> 陽線（上昇）
          <span style={{ color: '#ff4d4f', marginLeft: 8 }}>■</span> 陰線（下降）
        </span>
      </div>
      <ResponsiveContainer width="100%" height={350}>
        <ComposedChart data={data} margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
          {showGrid && <CartesianGrid strokeDasharray="3 3" />}
          <XAxis dataKey="date" />
          <YAxis
            domain={[0, Math.max(...rawData.map(d => d.high)) - yOffset + 300]}
            tickFormatter={(v) => `${((v + yOffset) / 1000).toFixed(1)}k`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="base" stackId="candle" fill="transparent" isAnimationActive={false} />
          <Bar dataKey="body" stackId="candle" isAnimationActive={false} barSize={12} shape={<CandleShape />} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
