import React from "react";
import { useDashboardData } from "./hook/useDashboardData";

const Dashboard = () => {
  const { balanceData, isFetchingData: loadingData } = useDashboardData();

  return <div>Dashboard</div>;
};

export default Dashboard;
