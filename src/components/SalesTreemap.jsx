import { Treemap, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  {
    name: '東京', size: 4500, children: [
      { name: '新宿店', size: 1500 },
      { name: '渋谷店', size: 1200 },
      { name: '池袋店', size: 1000 },
      { name: '品川店', size: 800 },
    ],
  },
  {
    name: '大阪', size: 3200, children: [
      { name: '梅田店', size: 1400 },
      { name: 'なんば店', size: 1100 },
      { name: '天王寺店', size: 700 },
    ],
  },
  {
    name: '名古屋', size: 2000, children: [
      { name: '栄店', size: 1200 },
      { name: '名駅店', size: 800 },
    ],
  },
  {
    name: '福岡', size: 1500, children: [
      { name: '天神店', size: 900 },
      { name: '博多店', size: 600 },
    ],
  },
];

const COLORS = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c', '#d0ed57', '#ffc658', '#ff8042'];

function CustomContent({ x, y, width, height, name, depth, index }) {
  if (width < 30 || height < 20) return null;
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill={COLORS[index % COLORS.length]} stroke="#fff" strokeWidth={2} rx={4} />
      {width > 50 && height > 30 && (
        <text x={x + width / 2} y={y + height / 2} textAnchor="middle" dominantBaseline="middle" fill="#fff" fontSize={depth === 1 ? 14 : 11} fontWeight={depth === 1 ? 'bold' : 'normal'}>
          {name}
        </text>
      )}
    </g>
  );
}

export default function SalesTreemap() {
  return (
    <div className="chart-container">
      <h2>エリア別店舗売上（ツリーマップ）</h2>
      <ResponsiveContainer width="100%" height={300}>
        <Treemap
          data={data}
          dataKey="size"
          aspectRatio={4 / 3}
          stroke="#fff"
          content={<CustomContent />}
        >
          <Tooltip formatter={(value) => [`${value}万円`, '売上']} />
        </Treemap>
      </ResponsiveContainer>
    </div>
  );
}
