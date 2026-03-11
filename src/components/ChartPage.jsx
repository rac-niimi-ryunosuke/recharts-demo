export default function ChartPage({ chart: Chart, explanation }) {
  return (
    <div className="chart-page">
      <div className="chart-page-graph">
        <Chart />
      </div>
      {explanation && (
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
        </div>
      )}
    </div>
  );
}
