export default function AboutRecharts() {
  return (
    <div className="about-page">
      <div className="about-card">
        <h1>Recharts とは？</h1>
        <p className="about-lead">
          React 専用のグラフ描画ライブラリ。D3.js ベースだが、D3 の知識は一切不要。
          コンポーネントを組み合わせるだけでグラフが作れます。
        </p>
        <p className="about-lead" style={{ marginTop: 8 }}>
          MIT ライセンスで無料。React 向けチャートライブラリとしては最も人気があります。
        </p>
      </div>

      <div className="about-card">
        <h2>特徴</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <div className="feature-icon">{"</>"}</div>
            <h3>宣言的API</h3>
            <p>HTMLを書くようにグラフを記述。Reactのコンポーネント思考と相性抜群</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">{"{ }"}</div>
            <h3>シンプルなデータ</h3>
            <p>配列 of オブジェクト形式。特別な変換なしで使える</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">{"[ ]"}</div>
            <h3>豊富なグラフ種類</h3>
            <p>棒・折れ線・円・エリア・レーダー・ツリーマップなど15種類以上</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">{"<R>"}</div>
            <h3>カスタマイズ自由</h3>
            <p>Tooltip・ラベル・シェイプにReactコンポーネントが使える</p>
          </div>
        </div>
      </div>

      <div className="about-card">
        <h2>インストール</h2>
        <pre className="code-block"><code>{`# npm の場合
npm install recharts

# yarn の場合
yarn add recharts`}</code></pre>
        <p style={{ marginTop: 12, color: '#888', fontSize: 14 }}>
          必要なのはこれだけ！React プロジェクトに1コマンドで追加できます。
        </p>
      </div>

      <div className="about-card">
        <h2>コア概念：コンポーネントの組み合わせ</h2>
        <p className="about-lead" style={{ marginBottom: 16 }}>
          Recharts の基本思想は「<strong>レゴブロックのように部品を組み合わせる</strong>」こと。
          グラフ本体・軸・凡例・ツールチップなどが全て独立したコンポーネントで、必要なものだけ配置します。
        </p>
        <div className="component-tree">
          <pre className="code-block"><code>{`<ResponsiveContainer>     ← レスポンシブ対応のラッパー
  <BarChart data={data}>   ← グラフ本体（種類を決める）
    <CartesianGrid />      ← 背景のグリッド線
    <XAxis dataKey="月" /> ← X軸（カテゴリ）
    <YAxis />              ← Y軸（数値、自動スケール）
    <Tooltip />            ← マウスオーバーで値表示
    <Legend />             ← 凡例
    <Bar dataKey="売上" /> ← データ系列（棒）
  </BarChart>
</ResponsiveContainer>`}</code></pre>
        </div>
        <p style={{ marginTop: 12, color: '#666', fontSize: 14, lineHeight: 1.7 }}>
          グラフの種類を変えたいときは、外側のコンポーネントを差し替えるだけ。
          例えば <code>BarChart</code> → <code>LineChart</code>、<code>Bar</code> → <code>Line</code> に変えれば折れ線グラフになります。
        </p>
      </div>

      <div className="about-card">
        <h2>データの形：配列 of オブジェクト</h2>
        <p className="about-lead" style={{ marginBottom: 16 }}>
          すべてのグラフで共通のデータ形式。APIレスポンスをそのまま使えることが多いです。
        </p>
        <pre className="code-block"><code>{`// これだけ！特別な変換は不要
const data = [
  { month: '1月', 売上: 420, 利益: 120 },
  { month: '2月', 売上: 380, 利益: 98 },
  { month: '3月', 売上: 510, 利益: 150 },
  { month: '4月', 売上: 470, 利益: 130 },
];

// XAxis の dataKey="month" → X軸のラベルに使うキー
// Bar の dataKey="売上"   → 棒の高さに使うキー
// 日本語キーもOK！`}</code></pre>
      </div>

      <div className="about-card">
        <h2>5ステップで作る最初のグラフ</h2>

        <div className="step-list">
          <div className="step-item">
            <div className="step-number">1</div>
            <div className="step-content">
              <h4>グラフの種類を選んでデータを渡す</h4>
              <pre className="code-block"><code>{`import { BarChart, Bar } from 'recharts';

<BarChart width={500} height={300} data={data}>
  <Bar dataKey="売上" fill="#8884d8" />
</BarChart>`}</code></pre>
            </div>
          </div>

          <div className="step-item">
            <div className="step-number">2</div>
            <div className="step-content">
              <h4>軸・グリッド・凡例を追加</h4>
              <pre className="code-block"><code>{`import { XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

<BarChart data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="month" />
  <YAxis />
  <Legend />
  <Bar dataKey="売上" fill="#8884d8" />
</BarChart>`}</code></pre>
            </div>
          </div>

          <div className="step-item">
            <div className="step-number">3</div>
            <div className="step-content">
              <h4>Tooltip でインタラクション追加</h4>
              <pre className="code-block"><code>{`import { Tooltip } from 'recharts';

// Tooltip を1行追加するだけ
<BarChart data={data}>
  ...
  <Tooltip />   ← マウスオーバーで値がポップアップ
</BarChart>`}</code></pre>
            </div>
          </div>

          <div className="step-item">
            <div className="step-number">4</div>
            <div className="step-content">
              <h4>ResponsiveContainer でレスポンシブ対応</h4>
              <pre className="code-block"><code>{`import { ResponsiveContainer } from 'recharts';

// 固定サイズではなく親要素に合わせて伸縮
<ResponsiveContainer width="100%" height={300}>
  <BarChart data={data}>
    ...
  </BarChart>
</ResponsiveContainer>`}</code></pre>
              <p style={{ marginTop: 8, color: '#888', fontSize: 13 }}>
                ※ ResponsiveContainer は width/height にピクセルではなく %指定が可能。
              </p>
            </div>
          </div>

          <div className="step-item">
            <div className="step-number">5</div>
            <div className="step-content">
              <h4>見た目をカスタマイズ</h4>
              <pre className="code-block"><code>{`// 色・サイズ・角丸などプロパティで調整
<Bar dataKey="売上" fill="#8884d8"
     radius={[4, 4, 0, 0]}     // 角丸
     barSize={40} />            // 棒の幅

// カスタムTooltipも渡せる
<Tooltip content={<MyCustomTooltip />} />`}</code></pre>
            </div>
          </div>
        </div>
      </div>

      <div className="about-card">
        <h2>主要コンポーネント一覧</h2>
        <table className="comparison-table">
          <thead>
            <tr>
              <th>コンポーネント</th>
              <th>役割</th>
              <th>覚えておくこと</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>ResponsiveContainer</code></td>
              <td>レスポンシブ対応</td>
              <td>width="100%"が基本</td>
            </tr>
            <tr>
              <td><code>XAxis / YAxis</code></td>
              <td>軸の描画</td>
              <td>dataKeyでラベルを指定。2軸はyAxisIdで</td>
            </tr>
            <tr>
              <td><code>CartesianGrid</code></td>
              <td>背景グリッド</td>
              <td>strokeDasharray="3 3"で破線に</td>
            </tr>
            <tr>
              <td><code>Tooltip</code></td>
              <td>ホバー情報</td>
              <td>contentにReactコンポーネントを渡せる</td>
            </tr>
            <tr>
              <td><code>Legend</code></td>
              <td>凡例</td>
              <td>自動生成。位置やスタイル変更可</td>
            </tr>
            <tr>
              <td><code>Brush</code></td>
              <td>範囲選択</td>
              <td>1行追加でズーム機能が付く</td>
            </tr>
            <tr>
              <td><code>ReferenceLine</code></td>
              <td>基準線</td>
              <td>目標値・閾値の表示に便利</td>
            </tr>
            <tr>
              <td><code>Cell</code></td>
              <td>個別スタイル</td>
              <td>棒やセグメントごとに色を変更</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="about-card">
        <h2>よく使うパターン集</h2>

        <div className="pattern-section">
          <h3 style={{ fontSize: 16, color: '#1890ff', marginBottom: 8 }}>パターン1: グラフの種類を切り替える</h3>
          <pre className="code-block"><code>{`// 棒グラフ → 折れ線グラフ
// BarChart → LineChart, Bar → Line に変えるだけ！

// Before:
<BarChart data={data}>
  <Bar dataKey="売上" />
</BarChart>

// After:
<LineChart data={data}>
  <Line dataKey="売上" type="monotone" />
</LineChart>`}</code></pre>
        </div>

        <div className="pattern-section" style={{ marginTop: 20 }}>
          <h3 style={{ fontSize: 16, color: '#1890ff', marginBottom: 8 }}>パターン2: 複数データ系列を重ねる</h3>
          <pre className="code-block"><code>{`// 同じグラフに複数の Bar / Line を追加するだけ
<BarChart data={data}>
  <Bar dataKey="売上" fill="#8884d8" />
  <Bar dataKey="利益" fill="#82ca9d" />
</BarChart>`}</code></pre>
        </div>

        <div className="pattern-section" style={{ marginTop: 20 }}>
          <h3 style={{ fontSize: 16, color: '#1890ff', marginBottom: 8 }}>パターン3: 積み上げにする</h3>
          <pre className="code-block"><code>{`// stackId を同じ値にするだけ
<Bar dataKey="東京" stackId="a" fill="#8884d8" />
<Bar dataKey="大阪" stackId="a" fill="#82ca9d" />
// AreaChart でも同じパターン`}</code></pre>
        </div>

        <div className="pattern-section" style={{ marginTop: 20 }}>
          <h3 style={{ fontSize: 16, color: '#1890ff', marginBottom: 8 }}>パターン4: 2軸グラフ（単位が違うデータ）</h3>
          <pre className="code-block"><code>{`// yAxisId で左右の軸を使い分け
<YAxis yAxisId="left" />           // 左軸: 売上（万円）
<YAxis yAxisId="right"
       orientation="right" />      // 右軸: 前年比（%）

<Bar yAxisId="left" dataKey="売上" />
<Line yAxisId="right" dataKey="前年比" />`}</code></pre>
        </div>
      </div>

      <div className="about-card">
        <h2>カスタマイズのポイント</h2>
        <ul style={{ paddingLeft: 20, margin: 0 }}>
          <li style={{ fontSize: 14, color: '#444', lineHeight: 2 }}>
            <strong>色の変更</strong>：<code>fill</code>（塗り）と <code>stroke</code>（線）で指定
          </li>
          <li style={{ fontSize: 14, color: '#444', lineHeight: 2 }}>
            <strong>カスタムTooltip</strong>：<code>{"<Tooltip content={<MyComponent />} />"}</code> で完全オリジナルのUIに
          </li>
          <li style={{ fontSize: 14, color: '#444', lineHeight: 2 }}>
            <strong>条件付き色分け</strong>：<code>Cell</code> コンポーネントで棒ごと・セグメントごとに色を変更
          </li>
          <li style={{ fontSize: 14, color: '#444', lineHeight: 2 }}>
            <strong>アニメーション</strong>：デフォルトで有効。<code>isAnimationActive={"{false}"}</code> で無効化
          </li>
          <li style={{ fontSize: 14, color: '#444', lineHeight: 2 }}>
            <strong>基準線</strong>：<code>ReferenceLine</code> で目標値や閾値を表示
          </li>
          <li style={{ fontSize: 14, color: '#444', lineHeight: 2 }}>
            <strong>レスポンシブ</strong>：<code>ResponsiveContainer</code> で囲むだけ。SSRでは注意が必要
          </li>
        </ul>
      </div>

      <div className="about-card">
        <h2>他のライブラリとの比較</h2>
        <table className="comparison-table">
          <thead>
            <tr>
              <th></th>
              <th>Recharts</th>
              <th>Chart.js</th>
              <th>Victory</th>
              <th>Nivo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>React特化</td>
              <td className="good">◎</td>
              <td className="fair">△</td>
              <td className="good">◎</td>
              <td className="good">◎</td>
            </tr>
            <tr>
              <td>学習コスト</td>
              <td className="good">低い</td>
              <td className="good">低い</td>
              <td className="fair">中</td>
              <td className="fair">中</td>
            </tr>
            <tr>
              <td>カスタマイズ性</td>
              <td className="good">高い</td>
              <td className="fair">中</td>
              <td className="good">高い</td>
              <td className="good">高い</td>
            </tr>
            <tr>
              <td>描画方式</td>
              <td>SVG</td>
              <td>Canvas</td>
              <td>SVG</td>
              <td>SVG/Canvas</td>
            </tr>
            <tr>
              <td>npm DL/週</td>
              <td className="good" title="出典: npm API (2026年3月時点)">約1,800万</td>
              <td className="good" title="出典: npm API (2026年3月時点)">約790万</td>
              <td title="出典: npm API (2026年3月時点)">約41万</td>
              <td title="出典: npm API @nivo/core (2026年3月時点)">約160万</td>
            </tr>
            <tr>
              <td>D3依存</td>
              <td>内部で使用</td>
              <td>なし</td>
              <td>内部で使用</td>
              <td>内部で使用</td>
            </tr>
          </tbody>
        </table>
        <p style={{ marginTop: 12, color: '#888', fontSize: 13 }}>
          ※ DL数はマウスオーバーで出典を確認できます。React プロジェクトなら Recharts が有力な選択肢です。
        </p>
      </div>

      <div className="about-card">
        <h2>今日のデモで扱うグラフ</h2>
        <div className="chart-type-grid">
          <div className="chart-type-section">
            <h4 style={{ color: '#1890ff', marginBottom: 8, fontSize: 15 }}>基本グラフ（5種）</h4>
            <ul style={{ paddingLeft: 20, margin: 0 }}>
              <li style={{ fontSize: 14, color: '#444', lineHeight: 1.8 }}>棒グラフ / 積み上げ棒グラフ</li>
              <li style={{ fontSize: 14, color: '#444', lineHeight: 1.8 }}>折れ線グラフ</li>
              <li style={{ fontSize: 14, color: '#444', lineHeight: 1.8 }}>エリアチャート</li>
              <li style={{ fontSize: 14, color: '#444', lineHeight: 1.8 }}>円グラフ</li>
            </ul>
          </div>
          <div className="chart-type-section">
            <h4 style={{ color: '#52c41a', marginBottom: 8, fontSize: 15 }}>応用グラフ（5種）</h4>
            <ul style={{ paddingLeft: 20, margin: 0 }}>
              <li style={{ fontSize: 14, color: '#444', lineHeight: 1.8 }}>複合グラフ（棒+線+エリア混合）</li>
              <li style={{ fontSize: 14, color: '#444', lineHeight: 1.8 }}>散布図</li>
              <li style={{ fontSize: 14, color: '#444', lineHeight: 1.8 }}>レーダーチャート</li>
              <li style={{ fontSize: 14, color: '#444', lineHeight: 1.8 }}>ツリーマップ / ファネル</li>
            </ul>
          </div>
          <div className="chart-type-section">
            <h4 style={{ color: '#ff7300', marginBottom: 8, fontSize: 15 }}>高度な機能（5種）</h4>
            <ul style={{ paddingLeft: 20, margin: 0 }}>
              <li style={{ fontSize: 14, color: '#444', lineHeight: 1.8 }}>放射状バー / サンキー</li>
              <li style={{ fontSize: 14, color: '#444', lineHeight: 1.8 }}>ブラシ（ズーム機能）</li>
              <li style={{ fontSize: 14, color: '#444', lineHeight: 1.8 }}>同期チャート</li>
              <li style={{ fontSize: 14, color: '#444', lineHeight: 1.8 }}>カスタムTooltip + 条件付き色分け</li>
            </ul>
          </div>
        </div>
        <p style={{ marginTop: 16, color: '#888', fontSize: 13 }}>
          各タブをクリックして、実際に動くグラフとコード例・解説をご覧ください！
        </p>
      </div>

      <div className="about-card">
        <h2>公式ドキュメント</h2>
        <p style={{ fontSize: 14, color: '#666', marginBottom: 8 }}>
          さらに詳しく知りたい方はこちら：
        </p>
        <p>
          <a href="https://recharts.org/" target="_blank" rel="noopener noreferrer" className="doc-link">
            recharts.org（公式サイト・API リファレンス）
          </a>
        </p>
        <p style={{ marginTop: 8 }}>
          <a href="https://github.com/recharts/recharts" target="_blank" rel="noopener noreferrer" className="doc-link">
            GitHub リポジトリ
          </a>
        </p>
      </div>
    </div>
  );
}
