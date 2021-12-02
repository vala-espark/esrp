import { Switch, Route } from "react-router-dom";
import Login from "./components/login/login.component";
import Dashboard from "./components/dashboard/dashboard.component";
import Linechart from "./components/charts/line/linechart.component";
import Barchart from "./components/charts/bar/barchart.component";
import Informer from "./components/charts/informer/informer.component";
import DonutChart from "./components/charts/donut/donut.component";
import ChartTable from "./components/charts/table/table.component";
import Header from "./components/header/header.component";
import ThemeChange from "./components/theme-change/ThemeChange-component";
import Sidebar from "./components/sidebar/Sidebar.component";
import Loading from "./components/loading/loading-component";
import Footer from "./components/footer/footer.component";
import ButtonCompo from "./components/buttons/button.component";
import CircleChart from "./components/charts/circle/circle.component";
import './App.css';
import BubbleChart from "./components/charts/bubble/bubble.component";
import ColumnChart from "./components/charts/column/column.component";
import TimelineChart from "./components/charts/timeline/timeline.componant";
import DotChart from "./components/charts/dot/dot.component";
import AnalysisDashboard from "./components/wageAnalysis/analysis-dashboard.component";
import AnalysisDashboardV2 from "./components/wageAnalysis-v2/analysis-dashboard.component";
import LaborAnalysis from "./components/labor-analysis/labor-analysis.componant";
import MapChart from "./components/charts/mapchart/MapChart.componenet";

function App() {
  return (
    <div className="App">
      <ThemeChange />
      {/* <Sidebar /> */}
      {/* has-sidebar */}
      <div className="site-content" id="SiteContent">
        <Header />
        <div className="site-inner-content">
          <Switch>
            <Route exact path="/" component={Dashboard}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/dashboard" component={Dashboard}></Route>
            <Route exact path="/line-chart" component={Linechart}></Route>
            <Route exact path="/bar-chart" component={Barchart}></Route>{/* NOT */}
            <Route exact path="/informer" component={Informer}></Route>
            <Route exact path="/chart-table" component={ChartTable}></Route>
            <Route exact path="/loading" component={Loading}></Route>
            <Route exact path="/donut" component={DonutChart}></Route>
            <Route exact path="/button" component={ButtonCompo}></Route>
            <Route exact path="/circle" component={CircleChart}></Route> 
            <Route exact path="/bubble" component={BubbleChart}></Route>{/* NOT */}
            <Route exact path="/column" component={ColumnChart}></Route>{/* NOT */} 
            <Route exact path="/timeline" component={TimelineChart}></Route>{/* NOT */} 
            <Route exact path="/dot" component={DotChart}></Route>{/* NOT */} 
            <Route exact path="/analysis-dashboard" component={AnalysisDashboard}></Route>
            <Route exact path="/analysis-dashboard-v2" component={AnalysisDashboardV2}></Route>
            <Route exact path="/labor-analysis" component={LaborAnalysis}></Route>
            <Route exact path="/map-chart" component={MapChart}></Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
