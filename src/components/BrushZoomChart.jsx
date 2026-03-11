import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush, ResponsiveContainer
} from 'recharts';

const data = Array.from({ length: 60 }, (_, i) => {
  const date = new Date(2025, 0, i + 1);
  const month = date.getMonth();
  return {
    日付: `${date.getMonth() + 1}/${date.getDate()}`,
    PV: Math.floor(2000 + Math.sin(i * 0.3) * 800 + Math.random() * 400),
    UU: Math.floor(800 + Math.cos(i * 0.2) * 300 + Math.random() * 200),
  };
});

export default function BrushZoomChart() {
  return (
    <div className="chart-container">
      <h2>アクセス推移 + ブラシでズーム</h2>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="日付" tick={{ fontSize: 11 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="PV" stroke="#8884d8" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="UU" stroke="#82ca9d" strokeWidth={2} dot={false} />
          <Brush dataKey="日付" height={30} stroke="#8884d8" startIndex={0} endIndex={20} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
