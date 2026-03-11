import { useState } from 'react';
import Dashboard from './components/Dashboard';
import AboutRecharts from './components/AboutRecharts';
import StepByStep from './components/StepByStep';
import ChartPage from './components/ChartPage';
import SalesBarChart from './components/SalesBarChart';
import AccessLineChart from './components/AccessLineChart';
import CategoryPieChart from './components/CategoryPieChart';
import TrafficAreaChart from './components/TrafficAreaChart';
import CorrelationScatterChart from './components/CorrelationScatterChart';
import SkillRadarChart from './components/SkillRadarChart';
import SalesTreemap from './components/SalesTreemap';
import ConversionFunnelChart from './components/ConversionFunnelChart';
import SalesComposedChart from './components/SalesComposedChart';
import ProgressRadialBarChart from './components/ProgressRadialBarChart';
import FlowSankey from './components/FlowSankey';
import BrushZoomChart from './components/BrushZoomChart';
import SyncedCharts from './components/SyncedCharts';
import StackedBarChart from './components/StackedBarChart';
import CustomTooltipChart from './components/CustomTooltipChart';
import BubbleChart from './components/BubbleChart';
import NestedPieChart from './components/NestedPieChart';
import WaterfallChart from './components/WaterfallChart';
import GaugeChart from './components/GaugeChart';
import ReferenceLineChart from './components/ReferenceLineChart';
import CandlestickChart from './components/CandlestickChart';
import explanations from './data/explanations';
import './App.css';

const tabs = [
  { id: 'dashboard', label: 'ダッシュボード' },
  { id: 'about', label: 'Rechartsとは' },
  { id: 'steps', label: '5ステップ' },
  { id: 'bar', label: '棒グラフ' },
  { id: 'stacked', label: '積み上げ棒' },
  { id: 'line', label: '折れ線' },
  { id: 'area', label: 'エリア' },
  { id: 'pie', label: '円グラフ' },
  { id: 'nestedpie', label: '二重円' },
  { id: 'composed', label: '複合' },
  { id: 'scatter', label: '散布図' },
  { id: 'bubble', label: 'バブル' },
  { id: 'radar', label: 'レーダー' },
  { id: 'treemap', label: 'ツリーマップ' },
  { id: 'funnel', label: 'ファネル' },
  { id: 'waterfall', label: 'ウォーター' },
  { id: 'radialbar', label: '放射状バー' },
  { id: 'gauge', label: 'ゲージ' },
  { id: 'sankey', label: 'サンキー' },
  { id: 'refline', label: '参照線' },
  { id: 'candlestick', label: 'ローソク足' },
  { id: 'brush', label: 'ブラシ' },
  { id: 'synced', label: '同期' },
  { id: 'custom', label: 'カスタム' },
];

const chartComponents = {
  bar: SalesBarChart,
  stacked: StackedBarChart,
  line: AccessLineChart,
  area: TrafficAreaChart,
  pie: CategoryPieChart,
  nestedpie: NestedPieChart,
  composed: SalesComposedChart,
  scatter: CorrelationScatterChart,
  bubble: BubbleChart,
  radar: SkillRadarChart,
  treemap: SalesTreemap,
  funnel: ConversionFunnelChart,
  waterfall: WaterfallChart,
  radialbar: ProgressRadialBarChart,
  gauge: GaugeChart,
  sankey: FlowSankey,
  refline: ReferenceLineChart,
  candlestick: CandlestickChart,
  brush: BrushZoomChart,
  synced: SyncedCharts,
  custom: CustomTooltipChart,
};

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    if (activeTab === 'dashboard') return <Dashboard />;
    if (activeTab === 'about') return <AboutRecharts />;
    if (activeTab === 'steps') return <StepByStep />;
    return (
      <ChartPage
        chartId={activeTab}
        chart={chartComponents[activeTab]}
        explanation={explanations[activeTab]}
      />
    );
  };

  return (
    <div className="app">
      <nav className="tab-nav">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
}
