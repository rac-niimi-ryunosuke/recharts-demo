import {
  FunnelChart, Funnel, Tooltip, LabelList, ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'サイト訪問', value: 10000, fill: '#8884d8' },
  { name: '商品閲覧', value: 6500, fill: '#83a6ed' },
  { name: 'カート追加', value: 3200, fill: '#82ca9d' },
  { name: '決済開始', value: 1800, fill: '#ffc658' },
  { name: '購入完了', value: 1200, fill: '#ff8042' },
];

export default function ConversionFunnelChart() {
  return (
    <div className="chart-container">
      <h2>コンバージョンファネル</h2>
      <ResponsiveContainer width="100%" height={300}>
        <FunnelChart>
          <Tooltip />
          <Funnel dataKey="value" data={data} isAnimationActive>
            <LabelList position="right" dataKey="name" />
          </Funnel>
        </FunnelChart>
      </ResponsiveContainer>
    </div>
  );
}
