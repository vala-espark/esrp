import { Switch, Route } from "react-router-dom";
import Login from "./components/login/login.component";
import Dashboard from "./components/dashboard/dashboard.component";
import Linechart from "./components/charts/linechart/linechart.component";
import Barchart from "./components/charts/barchart/barchart.component";
import Informer from "./components/charts/informer/informer.component";
import DonutChart from "./components/charts/donut/donut.component";
import ChartTable from "./components/charts/table/table.component";
import Header from "./components/header/header.component";
import ThemeChange from "./components/theme-change/ThemeChange-component";
import Sidebar from "./components/sidebar/Sidebar.component";
import Loading from "./components/loading/loading-component";
import Footer from "./components/footer/footer.component";
import './App.css';

function App() {
  return (
    <div className="App">
      <ThemeChange />
      <Sidebar />
      {/* has-sidebar */}
      <div className="site-content has-sidebar" id="SiteContent">
        <Header />
        <div className="site-inner-content">
          <Switch>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/dashboard" component={Dashboard}></Route>
            <Route exact path="/line-chart" component={Linechart}></Route>
            <Route exact path="/bar-chart" component={Barchart}></Route>
            <Route exact path="/informer" component={Informer}></Route>
            <Route exact path="/chart-table" component={ChartTable}></Route>
            <Route exact path="/loading" component={Loading}></Route>
            <Route exact path="/donut" component={DonutChart}></Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
