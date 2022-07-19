import React, { useState, useEffect } from "react";
import { DashboardDataResponse } from "../model/Dashboard.model";
import { DashboardAPI } from "../../../api/src/dashboard";

export const useDashboardData = () => {
  const [isFetchingData, setIsFetchingData] = useState<any>(false);
  const [balanceData, setBalanceData] = useState<DashboardDataResponse>([]);
  const [monthlyReportData, setMonthlyReportData] =
    useState<DashboardDataResponse>([]);

  const [highLightReport, setHighLightReport] = useState<DashboardDataResponse>(
    []
  );

  useEffect(() => {
    setIsFetchingData(true);

    DashboardAPI.getBalance()
      .then((x) => setBalanceData(x))
      .finally(() => setIsFetchingData(false));
  }, []);

  return {
    balanceData,
    monthlyReportData,
    highLightReport,
    isFetchingData,
  };
};
