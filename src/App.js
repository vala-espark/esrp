import { Switch, Route } from "react-router-dom";
import Login from "./components/login/login.component";
import Dashboard from "./components/dashboard/dashboard.component";
import Linechart from "./components/charts/linechart.component";
import Barchart from "./components/charts/barchart.component";
import Header from "./components/header/header.componant";
import ThemeChange from "./components/theme-change/ThemeChange-componant";
import Sidebar from "./components/sidebar/Sidebar.componant";
import './App.css';

function App() {
  return (
    <div className="App esrp-theme">
      <ThemeChange />
      <Sidebar />
      <div className="site-content" id="SiteContent">
        <Header />
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/dashboard" component={Dashboard}></Route>
          <Route exact path="/line-chart" component={Linechart}></Route>
          <Route exact path="/bar-chart" component={Barchart}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
