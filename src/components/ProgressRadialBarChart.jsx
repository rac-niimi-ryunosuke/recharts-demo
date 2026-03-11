import {
  RadialBarChart, RadialBar, Legend, ResponsiveContainer, Tooltip
} from 'recharts';

const data = [
  { name: 'テスト', progress: 95, fill: '#8884d8' },
  { name: 'コードレビュー', progress: 82, fill: '#83a6ed' },
  { name: 'ドキュメント', progress: 68, fill: '#82ca9d' },
  { name: 'デプロイ準備', progress: 55, fill: '#ffc658' },
  { name: 'パフォーマンス', progress: 40, fill: '#ff8042' },
];

export default function ProgressRadialBarChart() {
  return (
    <div className="chart-container">
      <h2>プロジェクト進捗（放射状バー）</h2>
      <ResponsiveContainer width="100%" height={300}>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="15%"
          outerRadius="90%"
          barSize={18}
          data={data}
          startAngle={180}
          endAngle={0}
        >
          <RadialBar
            background
            dataKey="progress"
            label={{ position: 'insideStart', fill: '#fff', fontSize: 11 }}
          />
          <Legend
            iconSize={10}
            layout="vertical"
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{ fontSize: 12 }}
          />
          <Tooltip formatter={(value) => [`${value}%`, '進捗']} />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
