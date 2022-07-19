import React from "react";

import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import { Dashboard, Transactions } from "../components";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
      </Switch>
    </Router>
  );
};
export default Routes;
