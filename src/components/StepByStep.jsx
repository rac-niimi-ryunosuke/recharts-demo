import { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { month: '1月', 売上: 420 },
  { month: '2月', 売上: 380 },
  { month: '3月', 売上: 510 },
  { month: '4月', 売上: 470 },
  { month: '5月', 売上: 620 },
  { month: '6月', 売上: 580 },
];

const steps = [
  {
    title: 'Step 1: グラフとデータだけ',
    desc: 'BarChart にデータを渡して、Bar で描画。最小構成はこれだけ。',
    code: `<BarChart width={500} height={300} data={data}>
  <Bar dataKey="売上" fill="#8884d8" />
</BarChart>`,
    render: () => (
      <BarChart width={500} height={300} data={data}>
        <Bar dataKey="売上" fill="#8884d8" />
      </BarChart>
    ),
  },
  {
    title: 'Step 2: 軸・グリッド・凡例を追加',
    desc: 'XAxis, YAxis, CartesianGrid, Legend を追加。グラフらしくなる。',
    code: `<BarChart width={500} height={300} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="month" />
  <YAxis />
  <Legend />
  <Bar dataKey="売上" fill="#8884d8" />
</BarChart>`,
    render: () => (
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Legend />
        <Bar dataKey="売上" fill="#8884d8" />
      </BarChart>
    ),
  },
  {
    title: 'Step 3: Tooltip でインタラクション',
    desc: 'Tooltip を追加するだけで、マウスオーバーで値が表示される。',
    code: `<BarChart width={500} height={300} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="month" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="売上" fill="#8884d8" />
</BarChart>`,
    render: () => (
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="売上" fill="#8884d8" />
      </BarChart>
    ),
  },
  {
    title: 'Step 4: ResponsiveContainer でレスポンシブ対応',
    desc: '固定サイズ → 親要素に合わせて伸縮するようになる。画面幅を変えてみてください。',
    code: `<ResponsiveContainer width="100%" height={300}>
  <BarChart data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="month" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="売上" fill="#8884d8" />
  </BarChart>
</ResponsiveContainer>`,
    render: () => (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="売上" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    ),
  },
  {
    title: 'Step 5: 見た目をカスタマイズ',
    desc: '角丸、Tooltip のフォーマット、余白調整で完成度を上げる。',
    code: `<ResponsiveContainer width="100%" height={300}>
  <BarChart data={data}
    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="month" />
    <YAxis />
    <Tooltip
      formatter={(value) => [\`\${value}万円\`, '売上']} />
    <Legend />
    <Bar dataKey="売上" fill="#8884d8"
         radius={[4, 4, 0, 0]} />
  </BarChart>
</ResponsiveContainer>`,
    render: () => (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip formatter={(value) => [`${value}万円`, '売上']} />
          <Legend />
          <Bar dataKey="売上" fill="#8884d8" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    ),
  },
];

export default function StepByStep() {
  const [currentStep, setCurrentStep] = useState(0);
  const step = steps[currentStep];

  return (
    <div className="step-by-step-page">
      <div className="step-nav">
        {steps.map((s, i) => (
          <span key={i} style={{ display: 'contents' }}>
            {i > 0 && (
              <div className={`step-connector ${i <= currentStep ? 'active' : ''}`} />
            )}
            <button
              className={`step-nav-btn ${i === currentStep ? 'active' : ''} ${i < currentStep ? 'done' : ''}`}
              onClick={() => setCurrentStep(i)}
            >
              <span className="step-nav-num">{i + 1}</span>
            </button>
          </span>
        ))}
      </div>

      <h2 className="step-title">{step.title}</h2>
      <p className="step-desc">{step.desc}</p>

      <div className="step-graph-area">
        {step.render()}
      </div>

      <div className="step-code-area">
        <h4>コード</h4>
        <pre className="code-block"><code>{step.code}</code></pre>
      </div>

      {currentStep > 0 && (
        <div className="step-diff">
          <h4>前のステップからの変更点</h4>
          <DiffView prev={steps[currentStep - 1].code} curr={step.code} />
        </div>
      )}

      <div className="step-buttons">
        <button
          className="step-btn"
          disabled={currentStep === 0}
          onClick={() => setCurrentStep(currentStep - 1)}
        >
          ← 前へ
        </button>
        <span className="step-indicator">{currentStep + 1} / {steps.length}</span>
        <button
          className="step-btn"
          disabled={currentStep === steps.length - 1}
          onClick={() => setCurrentStep(currentStep + 1)}
        >
          次へ →
        </button>
      </div>
    </div>
  );
}

function DiffView({ prev, curr }) {
  const prevLines = prev.split('\n');
  const currLines = curr.split('\n');
  const prevSet = new Set(prevLines.map(l => l.trim()));

  return (
    <pre className="code-block diff-block"><code>{
      currLines.map((line, i) => {
        const isNew = !prevSet.has(line.trim());
        return (
          <span key={i} className={isNew ? 'diff-added' : ''}>
            {isNew ? '+ ' : '  '}{line}{'\n'}
          </span>
        );
      })
    }</code></pre>
  );
}
