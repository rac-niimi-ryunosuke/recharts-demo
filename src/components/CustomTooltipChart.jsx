import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, ReferenceLine
} from 'recharts';

const data = [
  { name: '田中', 売上: 320, 目標: 300, 達成: true },
  { name: '鈴木', 売上: 280, 目標: 300, 達成: false },
  { name: '佐藤', 売上: 410, 目標: 350, 達成: true },
  { name: '高橋', 売上: 190, 目標: 300, 達成: false },
  { name: '伊藤', 売上: 350, 目標: 300, 達成: true },
  { name: '渡辺', 売上: 300, 目標: 300, 達成: true },
  { name: '山本', 売上: 260, 目標: 300, 達成: false },
  { name: '中村', 売上: 380, 目標: 350, 達成: true },
];

function CustomTooltipContent({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div style={{
      background: '#fff',
      border: '1px solid #ddd',
      borderRadius: 8,
      padding: '12px 16px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
    }}>
      <p style={{ fontWeight: 'bold', marginBottom: 4 }}>{label}</p>
      <p style={{ color: d.達成 ? '#52c41a' : '#ff4d4f', fontSize: 20, fontWeight: 'bold', margin: '4px 0' }}>
        {d.売上}万円
      </p>
      <p style={{ color: '#888', fontSize: 12 }}>目標: {d.目標}万円</p>
      <p style={{
        marginTop: 4,
        padding: '2px 8px',
        borderRadius: 4,
        display: 'inline-block',
        fontSize: 12,
        fontWeight: 'bold',
        background: d.達成 ? '#f6ffed' : '#fff2f0',
        color: d.達成 ? '#52c41a' : '#ff4d4f',
      }}>
        {d.達成 ? '達成!' : '未達成'}
      </p>
    </div>
  );
}

export default function CustomTooltipChart() {
  return (
    <div className="chart-container">
      <h2>個人売上（カスタムTooltip + 条件付き色分け）</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltipContent />} />
          <ReferenceLine y={300} stroke="#ff4d4f" strokeDasharray="5 5" label={{ value: '基本目標', fill: '#ff4d4f', fontSize: 12 }} />
          <Bar dataKey="売上" radius={[4, 4, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.達成 ? '#52c41a' : '#ff4d4f'} fillOpacity={0.8} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
