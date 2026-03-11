import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ZAxis
} from 'recharts';

const marketingData = [
  { 広告費: 10, 売上: 80 }, { 広告費: 15, 売上: 120 }, { 広告費: 20, 売上: 150 },
  { 広告費: 25, 売上: 200 }, { 広告費: 30, 売上: 220 }, { 広告費: 35, 売上: 280 },
  { 広告費: 40, 売上: 310 }, { 広告費: 45, 売上: 350 }, { 広告費: 50, 売上: 400 },
  { 広告費: 55, 売上: 380 }, { 広告費: 60, 売上: 450 }, { 広告費: 65, 売上: 470 },
];

const snsData = [
  { 広告費: 5, 売上: 50 }, { 広告費: 12, 売上: 90 }, { 広告費: 18, 売上: 130 },
  { 広告費: 22, 売上: 160 }, { 広告費: 28, 売上: 190 }, { 広告費: 33, 売上: 230 },
  { 広告費: 38, 売上: 250 }, { 広告費: 42, 売上: 300 }, { 広告費: 48, 売上: 320 },
  { 広告費: 52, 売上: 340 }, { 広告費: 58, 売上: 390 }, { 広告費: 62, 売上: 410 },
];

export default function CorrelationScatterChart() {
  return (
    <div className="chart-container">
      <h2>広告費 vs 売上（散布図）</h2>
      <ResponsiveContainer width="100%" height={300}>
        <ScatterChart margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" dataKey="広告費" name="広告費" unit="万" />
          <YAxis type="number" dataKey="売上" name="売上" unit="万" />
          <ZAxis range={[60, 60]} />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <Scatter name="リスティング広告" data={marketingData} fill="#8884d8" />
          <Scatter name="SNS広告" data={snsData} fill="#82ca9d" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
