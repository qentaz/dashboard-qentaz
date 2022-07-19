import { BALANCE, MONTHLY_REPORT, HIGHLIGHT_TRANSACTIONS } from "../../config";
import { getData } from "../api-call";

const getBalance = async () => await getData(BALANCE);

const getMonthlyReport = async () => await getData(MONTHLY_REPORT);

const getHighlightTransactions = async () =>
  await getData(HIGHLIGHT_TRANSACTIONS);

export const DashboardAPI = {
  getBalance,
  getMonthlyReport,
  getHighlightTransactions,
};
