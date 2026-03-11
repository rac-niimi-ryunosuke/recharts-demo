import SalesBarChart from './SalesBarChart';
import AccessLineChart from './AccessLineChart';
import CategoryPieChart from './CategoryPieChart';
import TrafficAreaChart from './TrafficAreaChart';
import CorrelationScatterChart from './CorrelationScatterChart';
import SkillRadarChart from './SkillRadarChart';
import SalesTreemap from './SalesTreemap';
import ConversionFunnelChart from './ConversionFunnelChart';
import SalesComposedChart from './SalesComposedChart';
import ProgressRadialBarChart from './ProgressRadialBarChart';
import FlowSankey from './FlowSankey';
import BrushZoomChart from './BrushZoomChart';
import SyncedCharts from './SyncedCharts';
import StackedBarChart from './StackedBarChart';
import CustomTooltipChart from './CustomTooltipChart';
import BubbleChart from './BubbleChart';
import NestedPieChart from './NestedPieChart';
import WaterfallChart from './WaterfallChart';
import GaugeChart from './GaugeChart';
import ReferenceLineChart from './ReferenceLineChart';
import CandlestickChart from './CandlestickChart';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Recharts ダッシュボード</h1>
        <p className="subtitle">React + Recharts で作れるグラフサンプル全21種</p>
        <p>
          <a href="https://recharts.github.io/en-US/examples/" target="_blank" rel="noopener noreferrer" className="doc-link">
            公式サンプル集（もっと多くのグラフ例を見る）
          </a>
        </p>
      </div>

      <h3 className="section-title">基本グラフ</h3>
      <div className="dashboard-grid">
        <div className="card">
          <SalesBarChart />
        </div>
        <div className="card">
          <AccessLineChart />
        </div>
        <div className="card">
          <CategoryPieChart />
        </div>
        <div className="card">
          <TrafficAreaChart />
        </div>
      </div>

      <h3 className="section-title">応用グラフ</h3>
      <div className="dashboard-grid">
        <div className="card">
          <StackedBarChart />
        </div>
        <div className="card">
          <SalesComposedChart />
        </div>
        <div className="card">
          <SkillRadarChart />
        </div>
        <div className="card">
          <CorrelationScatterChart />
        </div>
        <div className="card">
          <ProgressRadialBarChart />
        </div>
        <div className="card">
          <CustomTooltipChart />
        </div>
        <div className="card">
          <BubbleChart />
        </div>
        <div className="card">
          <NestedPieChart />
        </div>
        <div className="card">
          <GaugeChart />
        </div>
        <div className="card">
          <ReferenceLineChart />
        </div>
        <div className="card card-wide">
          <CandlestickChart />
        </div>
        <div className="card card-wide">
          <WaterfallChart />
        </div>
        <div className="card card-wide">
          <SalesTreemap />
        </div>
        <div className="card card-wide">
          <ConversionFunnelChart />
        </div>
      </div>

      <h3 className="section-title">高度な機能</h3>
      <div className="dashboard-grid">
        <div className="card card-wide">
          <FlowSankey />
        </div>
        <div className="card card-wide">
          <BrushZoomChart />
        </div>
        <div className="card card-wide">
          <SyncedCharts />
        </div>
      </div>
    </div>
  );
}
