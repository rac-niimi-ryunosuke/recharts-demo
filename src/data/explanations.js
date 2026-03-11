const explanations = {
  bar: {
    title: '棒グラフ（BarChart）',
    overview: 'Rechartsで最も基本的なグラフ。データの大小比較に最適で、月別売上などの可視化によく使います。',
    points: [
      'データは「配列 of オブジェクト」の形で渡す（Recharts共通）',
      'ResponsiveContainer で囲むとレスポンシブ対応になる',
      'XAxis / YAxis / CartesianGrid / Tooltip / Legend を組み合わせるだけ',
      'radius プロパティで棒の角を丸くできる',
    ],
    code: `// データの形（全グラフ共通パターン）
const data = [
  { month: '1月', 売上: 420 },
  { month: '2月', 売上: 380 },
  // ...
];

// コンポーネントの組み合わせ
<ResponsiveContainer width="100%" height={300}>
  <BarChart data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="month" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="売上" fill="#8884d8" />
  </BarChart>
</ResponsiveContainer>`,
    useCase: '管理画面の売上レポート、KPIダッシュボード、月次・週次の実績比較など。最もよく使うグラフ。',
  },

  stacked: {
    title: '積み上げ棒グラフ（Stacked BarChart）',
    overview: '複数カテゴリの内訳と合計を同時に表現できる棒グラフ。全体の推移と構成比を一目で把握できます。',
    points: [
      '各Barに同じ stackId を指定するだけで積み上げになる',
      '通常の棒グラフからの変更は stackId の1行追加だけ',
      '最上部のBarにだけ radius を付けると見栄えが良い',
    ],
    code: `// stackId を揃えるだけで積み上げに
<Bar dataKey="東京" stackId="a" fill="#8884d8" />
<Bar dataKey="大阪" stackId="a" fill="#82ca9d" />
<Bar dataKey="名古屋" stackId="a" fill="#ffc658" />
<Bar dataKey="福岡" stackId="a" fill="#ff8042"
     radius={[4, 4, 0, 0]} />`,
    useCase: 'エリア別・部門別の売上構成、四半期ごとの商品カテゴリ別推移など。',
  },

  line: {
    title: '折れ線グラフ（LineChart）',
    overview: '時系列データの推移を表現するのに最適。複数ラインの重ね表示で比較もできます。',
    points: [
      'BarChart → LineChart にコンポーネントを変えるだけで切り替わる',
      '複数のLineを入れれば重ね表示',
      'type="monotone" で滑らかな曲線に',
      'strokeWidth, dot でラインの太さや点の大きさを調整',
    ],
    code: `// 棒グラフとほぼ同じ構造
<LineChart data={data}>
  <Line type="monotone" dataKey="PC"
        stroke="#8884d8" strokeWidth={2} />
  <Line type="monotone" dataKey="スマホ"
        stroke="#82ca9d" strokeWidth={2} />
  <Line type="monotone" dataKey="タブレット"
        stroke="#ffc658" strokeWidth={2} />
</LineChart>

// BarChart→LineChart, Bar→Line に変えただけ！`,
    useCase: 'アクセス数推移、温度変化、株価チャート、進捗の経過など時系列データ全般。',
  },

  area: {
    title: 'エリアチャート（AreaChart）',
    overview: '折れ線の下を塗りつぶしたグラフ。stackIdを使えば積み上げエリアになり、全体量と内訳を同時に可視化。',
    points: [
      'LineChart と構造はほぼ同じ（Line → Area に変えるだけ）',
      'stackId で積み上げエリアに',
      'fillOpacity で塗りの透明度を調整すると見やすい',
    ],
    code: `<AreaChart data={data}>
  <Area type="monotone" dataKey="検索"
        stackId="1" stroke="#8884d8"
        fill="#8884d8" fillOpacity={0.6} />
  <Area type="monotone" dataKey="SNS"
        stackId="1" stroke="#82ca9d"
        fill="#82ca9d" fillOpacity={0.6} />
</AreaChart>`,
    useCase: 'トラフィックの内訳推移、収益源の構成変化、メモリ/CPU使用量の積み上げなど。',
  },

  pie: {
    title: '円グラフ（PieChart）',
    overview: '構成比・割合の表現に特化したグラフ。Cellコンポーネントでセグメントごとに色を変えます。',
    points: [
      'Pie + Cell の組み合わせで各セグメントに色を設定',
      'label プロパティでラベルの表示形式をカスタマイズ',
      'outerRadius / innerRadius でドーナツチャートにもなる',
    ],
    code: `const COLORS = ['#0088FE', '#00C49F', '#FFBB28',
                 '#FF8042', '#8884d8', '#82ca9d'];

<Pie data={data} dataKey="value" cx="50%" cy="50%"
     outerRadius={100}
     label={({ name, percent }) =>
       \`\${name} \${(percent * 100).toFixed(0)}%\`}>
  {data.map((_, i) => (
    <Cell key={i} fill={COLORS[i % COLORS.length]} />
  ))}
</Pie>

// innerRadius を指定するとドーナツに
// <Pie innerRadius={60} outerRadius={100} ... />`,
    useCase: 'カテゴリ別シェア、アンケート結果、予算配分の可視化など。項目数は6〜8個が見やすい。',
  },

  composed: {
    title: '複合グラフ（ComposedChart）',
    overview: '棒・折れ線・エリアを1つのグラフに混在。実務で最も使用頻度が高いパターン。',
    points: [
      'ComposedChart の中に Bar, Line, Area を自由に配置',
      'yAxisId で左右2軸を使い分けられる（売上と前年比など単位が違うデータ）',
      '実務では「売上（棒）+ 前年比（折れ線）」が定番',
    ],
    code: `<ComposedChart data={data}>
  {/* 左軸: 売上・利益（万円） */}
  <YAxis yAxisId="left" />
  {/* 右軸: 前年比（%） */}
  <YAxis yAxisId="right" orientation="right"
         domain={[70, 150]} unit="%" />

  <Area yAxisId="left" dataKey="利益"
        fill="#82ca9d" fillOpacity={0.3} />
  <Bar yAxisId="left" dataKey="売上"
       fill="#8884d8" />
  <Line yAxisId="right" dataKey="前年比"
        stroke="#ff7300" strokeWidth={2} />
</ComposedChart>`,
    useCase: '月次レポートの売上+利益+前年比、広告費+CV数+CPA、在庫数+出荷数+回転率など。',
  },

  scatter: {
    title: '散布図（ScatterChart）',
    overview: '2変数の相関関係を可視化。複数のデータセットを重ねて比較もできます。',
    points: [
      'XAxis / YAxis に type="number" を指定（カテゴリではなく数値軸）',
      '複数のScatterで異なるデータセットを重ね表示',
      'ZAxis でバブルサイズを変えればバブルチャートにもなる',
    ],
    code: `<ScatterChart>
  <XAxis type="number" dataKey="広告費"
         name="広告費" unit="万" />
  <YAxis type="number" dataKey="売上"
         name="売上" unit="万" />
  <Scatter name="リスティング"
           data={marketingData} fill="#8884d8" />
  <Scatter name="SNS広告"
           data={snsData} fill="#82ca9d" />
</ScatterChart>`,
    useCase: '広告費と売上の相関分析、価格と販売数の関係、A/Bテストの結果比較など。',
  },

  radar: {
    title: 'レーダーチャート（RadarChart）',
    overview: '複数の評価軸を放射状に配置。スキルマップや製品比較など多軸の評価に最適。',
    points: [
      'PolarGrid / PolarAngleAxis / PolarRadiusAxis でレーダーの枠を構成',
      '複数のRadarを重ねて比較（fillOpacityで半透明にすると重なりが見える）',
      'outerRadius でサイズ調整、domain でスケール設定',
    ],
    code: `<RadarChart data={data} cx="50%" cy="50%"
            outerRadius="70%">
  <PolarGrid />
  <PolarAngleAxis dataKey="skill" />
  <PolarRadiusAxis domain={[0, 100]} />
  <Radar name="Aさん" dataKey="Aさん"
         stroke="#8884d8" fill="#8884d8"
         fillOpacity={0.3} />
  <Radar name="Bさん" dataKey="Bさん"
         stroke="#82ca9d" fill="#82ca9d"
         fillOpacity={0.3} />
</RadarChart>`,
    useCase: 'メンバーのスキル評価、製品の多軸比較、チームのバランス分析など。',
  },

  treemap: {
    title: 'ツリーマップ（Treemap）',
    overview: '階層データの面積比較。値の大きさが面積に反映され、直感的にボリューム感が伝わります。',
    points: [
      'children を持つネスト構造のデータに対応',
      'content プロパティでカスタムレンダリング（色・テキスト等）',
      'デフォルトの見た目はシンプルなので、カスタムContentで装飾すると映える',
    ],
    code: `// ネスト構造のデータ
const data = [
  { name: '東京', size: 4500, children: [
    { name: '新宿店', size: 1500 },
    { name: '渋谷店', size: 1200 },
  ]},
  { name: '大阪', size: 3200, children: [...] },
];

// カスタムContent でセルの見た目を制御
<Treemap data={data} dataKey="size"
         content={<CustomContent />} />`,
    useCase: 'エリア別売上比較、ディスク使用量の可視化、予算配分の階層表示など。',
  },

  funnel: {
    title: 'ファネルチャート（FunnelChart）',
    overview: 'コンバージョンの各段階での離脱を可視化。マーケティングやUX分析の定番。',
    points: [
      '上から下に値が減少していくビジュアル',
      'Cell で段階ごとに色を変更',
      'LabelList で右側にラベルを表示',
    ],
    code: `const data = [
  { name: 'サイト訪問', value: 10000, fill: '#8884d8' },
  { name: '商品閲覧',   value: 6500,  fill: '#83a6ed' },
  { name: 'カート追加', value: 3200,  fill: '#82ca9d' },
  { name: '決済開始',   value: 1800,  fill: '#ffc658' },
  { name: '購入完了',   value: 1200,  fill: '#ff8042' },
];

<FunnelChart>
  <Funnel dataKey="value" data={data}>
    <LabelList position="right" />
  </Funnel>
</FunnelChart>`,
    useCase: 'EC購入フロー分析、採用プロセスの歩留まり、営業パイプラインなど。',
  },

  radialbar: {
    title: '放射状バーチャート（RadialBarChart）',
    overview: '円形の進捗バー。複数指標の達成率を一覧で表示するのに最適。',
    points: [
      'startAngle / endAngle で表示範囲を調整（半円、全円など）',
      'background プロパティで未達成部分をグレー表示',
      'innerRadius / outerRadius でバーの位置とサイズを制御',
    ],
    code: `<RadialBarChart
  innerRadius="15%" outerRadius="90%"
  data={data} startAngle={180} endAngle={0}>
  <RadialBar background dataKey="progress"
    label={{ position: 'insideStart',
             fill: '#fff', fontSize: 11 }} />
  <Legend layout="vertical"
         verticalAlign="bottom" />
</RadialBarChart>`,
    useCase: 'KPI達成率ダッシュボード、プロジェクト進捗一覧、目標vs実績の表示など。',
  },

  sankey: {
    title: 'サンキーダイアグラム（Sankey）',
    overview: 'フロー（流れ）を可視化。ノード間のデータの流量を帯の太さで表現します。',
    points: [
      'nodes（ノード）と links（接続）でデータを定義',
      'node プロパティでカスタムノードを描画',
      'link の strokeOpacity で帯の透明度を調整',
    ],
    code: `// ノードとリンクの定義
const data = {
  nodes: [
    { name: 'Google検索' },
    { name: 'SNS' },
    { name: 'トップページ' },
    // ...
  ],
  links: [
    { source: 0, target: 4, value: 3000 },
    { source: 1, target: 4, value: 1500 },
    // source→target の流量を value で
  ],
};

<Sankey data={data}
        node={<CustomNode />}
        link={{ stroke: '#aaa',
                strokeOpacity: 0.3 }} />`,
    useCase: 'ユーザーフロー分析、予算の流れ、エネルギーフロー、ページ遷移の可視化。',
  },

  brush: {
    title: 'ブラシ（Brush）',
    overview: 'グラフ下部にスライダーを追加して、表示範囲のズーム・スクロールを可能に。大量データの探索に便利。',
    points: [
      '既存のグラフに <Brush /> を1行追加するだけ',
      'startIndex / endIndex で初期表示範囲を指定',
      'height, stroke でスライダーの見た目を調整',
    ],
    code: `// 既存のLineChartにBrushを1行追加するだけ
<LineChart data={data}>
  <XAxis dataKey="日付" />
  <YAxis />
  <Line dataKey="PV" stroke="#8884d8" />
  <Line dataKey="UU" stroke="#82ca9d" />

  {/* ↓ これを追加するだけ！ */}
  <Brush dataKey="日付" height={30}
         stroke="#8884d8"
         startIndex={0} endIndex={20} />
</LineChart>`,
    useCase: '長期間のログデータ、株価チャート、IoTセンサーデータなど大量データの部分表示。',
  },

  synced: {
    title: '同期チャート（syncId）',
    overview: '複数のグラフのマウスオーバーを連動。同じデータを異なる視点で並べて比較する場面に。',
    points: [
      '各グラフに同じ syncId を指定するだけで連動',
      '異なるグラフ種類（棒+折れ線など）でもOK',
      'Tooltipが自動で同期する',
    ],
    code: `// syncId を揃えるだけで連動！
<BarChart data={data} syncId="store">
  <Bar dataKey="売上" />
  <Bar dataKey="来客数" />
</BarChart>

<LineChart data={data} syncId="store">
  <Line dataKey="客単価" />
</LineChart>

// 片方にマウスを乗せると
// もう片方のTooltipも追従する`,
    useCase: '売上と客単価の比較、PVとCVRの関係、温度と湿度の並列監視など。',
  },

  custom: {
    title: 'カスタムTooltip + 条件付き色分け',
    overview: 'Rechartsの真骨頂。TooltipにReactコンポーネントを渡して、自由なUIを描画できます。',
    points: [
      'Tooltip の content プロパティに React コンポーネントを渡す',
      'Cell + 条件分岐で棒の色をデータに応じて変更',
      'ReferenceLine で目標線を描画',
      'これらの組み合わせで「実務品質」のグラフに仕上がる',
    ],
    code: `// カスタムTooltip（Reactコンポーネント）
function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div style={{ background: '#fff', ... }}>
      <p>{d.name}</p>
      <p style={{ color: d.達成 ? 'green' : 'red' }}>
        {d.売上}万円
      </p>
      <p>{d.達成 ? '達成!' : '未達成'}</p>
    </div>
  );
}

// 条件付き色分け
<Bar dataKey="売上">
  {data.map((entry, i) => (
    <Cell key={i}
      fill={entry.達成 ? '#52c41a' : '#ff4d4f'} />
  ))}
</Bar>

// 目標線
<ReferenceLine y={300} stroke="#ff4d4f"
               strokeDasharray="5 5" />`,
    useCase: 'KPI達成/未達成の可視化、閾値アラート表示、リッチなインタラクティブレポート。',
  },
};

export default explanations;
