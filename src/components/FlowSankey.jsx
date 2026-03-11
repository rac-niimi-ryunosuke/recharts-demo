import { Sankey, Tooltip, ResponsiveContainer } from 'recharts';

const data = {
  nodes: [
    { name: 'Google検索' },
    { name: 'SNS' },
    { name: '広告' },
    { name: '直接アクセス' },
    { name: 'トップページ' },
    { name: '商品一覧' },
    { name: 'ブログ' },
    { name: '商品詳細' },
    { name: 'カート' },
    { name: '購入完了' },
  ],
  links: [
    { source: 0, target: 4, value: 3000 },
    { source: 0, target: 6, value: 1200 },
    { source: 1, target: 4, value: 1500 },
    { source: 1, target: 5, value: 800 },
    { source: 2, target: 5, value: 2000 },
    { source: 3, target: 4, value: 1000 },
    { source: 4, target: 5, value: 3500 },
    { source: 5, target: 7, value: 4000 },
    { source: 6, target: 5, value: 800 },
    { source: 7, target: 8, value: 2500 },
    { source: 8, target: 9, value: 1800 },
  ],
};

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#a4de6c', '#d0ed57'];

function CustomNode({ x, y, width, height, index, payload }) {
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill={COLORS[index % COLORS.length]} rx={3} />
      <text x={x + width + 6} y={y + height / 2} textAnchor="start" dominantBaseline="middle" fontSize={11} fill="#333">
        {payload.name}
      </text>
    </g>
  );
}

export default function FlowSankey() {
  return (
    <div className="chart-container">
      <h2>ユーザーフロー（サンキーダイアグラム）</h2>
      <ResponsiveContainer width="100%" height={350}>
        <Sankey
          data={data}
          node={<CustomNode />}
          link={{ stroke: '#aaa', strokeOpacity: 0.3 }}
          margin={{ top: 10, right: 120, bottom: 10, left: 10 }}
        >
          <Tooltip />
        </Sankey>
      </ResponsiveContainer>
    </div>
  );
}
