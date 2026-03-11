import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { month: '1月', 売上: 420, 来客数: 1200, 客単価: 3500 },
  { month: '2月', 売上: 380, 来客数: 1100, 客単価: 3450 },
  { month: '3月', 売上: 510, 来客数: 1400, 客単価: 3640 },
  { month: '4月', 売上: 470, 来客数: 1300, 客単価: 3610 },
  { month: '5月', 売上: 620, 来客数: 1600, 客単価: 3870 },
  { month: '6月', 売上: 580, 来客数: 1500, 客単価: 3860 },
  { month: '7月', 売上: 710, 来客数: 1800, 客単価: 3940 },
  { month: '8月', 売上: 690, 来客数: 1750, 客単価: 3940 },
  { month: '9月', 売上: 530, 来客数: 1350, 客単価: 3920 },
  { month: '10月', 売上: 610, 来客数: 1550, 客単価: 3930 },
  { month: '11月', 売上: 720, 来客数: 1850, 客単価: 3890 },
  { month: '12月', 売上: 850, 来客数: 2100, 客単価: 4040 },
];

export default function SyncedCharts() {
  return (
    <div className="chart-container">
      <h2>同期チャート（マウスオーバー連動）</h2>
      <p style={{ color: '#888', fontSize: 13, marginBottom: 12, paddingLeft: 8 }}>
        片方のグラフにマウスを乗せると、もう一方も連動します
      </p>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} syncId="store" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="売上" fill="#8884d8" radius={[4, 4, 0, 0]} />
          <Bar dataKey="来客数" fill="#82ca9d" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data} syncId="store" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="客単価" stroke="#ff7300" strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
