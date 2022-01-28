import { BrowserRouter, Route, Switch } from "react-router-dom";
import IncomeOutcomePage from "../pages/IncomeOutcomePage";
import MainPage from "../pages/MainPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ MainPage } />
        <Route exact path="/income-outcome" component={ IncomeOutcomePage } />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
