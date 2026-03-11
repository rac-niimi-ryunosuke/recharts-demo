import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { name: '食品', value: 35 },
  { name: '衣料品', value: 20 },
  { name: '家電', value: 18 },
  { name: '書籍', value: 12 },
  { name: 'スポーツ', value: 10 },
  { name: 'その他', value: 5 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

export default function CategoryPieChart() {
  return (
    <div className="chart-container">
      <h2>カテゴリ別売上割合</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={true}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={100}
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => [`${value}%`, '割合']} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
