import { useState } from 'react';
import sources from '../data/sources';

export default function ChartPage({ chartId, chart: Chart, explanation }) {
  const [showSource, setShowSource] = useState(false);
  const source = sources[chartId];

  return (
    <div className="chart-page-layout">
      <div className="chart-page-left">
        <div className="chart-page-graph">
          <Chart />
          {source && (
            <button
              className="source-toggle"
              onClick={() => setShowSource(!showSource)}
            >
              {showSource ? 'ソースを閉じる' : '実際のJSXを見る'}
            </button>
          )}
          {showSource && source && (
            <pre className="code-block source-code"><code>{source}</code></pre>
          )}
        </div>
      </div>
      {explanation && (
        <div className="chart-page-right">
          <div className="chart-page-explanation">
            <div className="explanation-section">
              <h3>{explanation.title}</h3>
              <p className="explanation-overview">{explanation.overview}</p>
            </div>

            {explanation.points && (
              <div className="explanation-section">
                <h4>ポイント</h4>
                <ul>
                  {explanation.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            )}

            {explanation.code && (
              <div className="explanation-section">
                <h4>コードのキモ</h4>
                <pre className="code-block"><code>{explanation.code}</code></pre>
              </div>
            )}

            {explanation.useCase && (
              <div className="explanation-section">
                <h4>使いどころ</h4>
                <p>{explanation.useCase}</p>
              </div>
            )}

            {explanation.faq && (
              <div className="explanation-section">
                <h4>Q&amp;A</h4>
                <div className="faq-list">
                  {explanation.faq.map((item, i) => (
                    <div key={i} className="faq-item">
                      <p className="faq-q">Q. {item.q}</p>
                      <p className="faq-a">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
