import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { skill: 'React', Aさん: 90, Bさん: 70 },
  { skill: 'TypeScript', Aさん: 80, Bさん: 85 },
  { skill: 'CSS', Aさん: 70, Bさん: 90 },
  { skill: 'Node.js', Aさん: 85, Bさん: 60 },
  { skill: 'テスト', Aさん: 60, Bさん: 80 },
  { skill: 'DB設計', Aさん: 75, Bさん: 65 },
  { skill: 'CI/CD', Aさん: 65, Bさん: 75 },
  { skill: 'UI設計', Aさん: 55, Bさん: 95 },
];

export default function SkillRadarChart() {
  return (
    <div className="chart-container">
      <h2>スキル比較レーダー</h2>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="skill" tick={{ fontSize: 12 }} />
          <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 10 }} />
          <Tooltip />
          <Legend />
          <Radar name="Aさん" dataKey="Aさん" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
          <Radar name="Bさん" dataKey="Bさん" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
