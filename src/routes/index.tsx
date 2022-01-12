import { Switch, Route } from "react-router-dom";
import Login from "../components/login";
import Dashboard from "../components/dashboard";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
};
export default Routes;
