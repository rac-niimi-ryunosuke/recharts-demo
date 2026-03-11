import { useState } from 'react';
import {
  ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { name: '商品A', 価格: 20, 満足度: 85, 販売数: 1200 },
  { name: '商品B', 価格: 35, 満足度: 72, 販売数: 800 },
  { name: '商品C', 価格: 15, 満足度: 90, 販売数: 2000 },
  { name: '商品D', 価格: 50, 満足度: 65, 販売数: 400 },
  { name: '商品E', 価格: 28, 満足度: 78, 販売数: 1500 },
  { name: '商品F', 価格: 42, 満足度: 88, 販売数: 600 },
  { name: '商品G', 価格: 18, 満足度: 70, 販売数: 1800 },
  { name: '商品H', 価格: 60, 満足度: 92, 販売数: 300 },
  { name: '商品I', 価格: 25, 満足度: 80, 販売数: 1100 },
  { name: '商品J', 価格: 38, 満足度: 75, 販売数: 900 },
];

const sizeRange = [40, 400];

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div style={{ background: '#fff', border: '1px solid #ccc', padding: '8px 12px', borderRadius: 6, fontSize: 13 }}>
      <p style={{ fontWeight: 'bold', margin: '0 0 4px' }}>{d.name}</p>
      <p style={{ margin: 0 }}>価格: {d.価格}万円</p>
      <p style={{ margin: 0 }}>満足度: {d.満足度}点</p>
      <p style={{ margin: 0 }}>販売数: {d.販売数}個</p>
    </div>
  );
};

export default function BubbleChart() {
  const [showGrid, setShowGrid] = useState(true);

  return (
    <div className="chart-container">
      <h2>商品分析バブルチャート</h2>
      <div className="chart-controls">
        <label className="chart-control-check">
          <input type="checkbox" checked={showGrid} onChange={(e) => setShowGrid(e.target.checked)} />
          グリッド線
        </label>
        <span style={{ fontSize: 13, color: '#888' }}>※ 円の大きさ = 販売数</span>
      </div>
      <ResponsiveContainer width="100%" height={350}>
        <ScatterChart margin={{ top: 10, right: 30, left: 20, bottom: 10 }}>
          {showGrid && <CartesianGrid strokeDasharray="3 3" />}
          <XAxis
            type="number" dataKey="価格" name="価格" unit="万"
            label={{ value: '価格（万円）', position: 'insideBottomRight', offset: -5 }}
          />
          <YAxis
            type="number" dataKey="満足度" name="満足度" unit="点"
            domain={[60, 100]}
            label={{ value: '満足度（点）', angle: -90, position: 'insideLeft', offset: 10 }}
          />
          <ZAxis type="number" dataKey="販売数" range={sizeRange} name="販売数" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Scatter name="商品" data={data} fill="#8884d8" fillOpacity={0.6} stroke="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
