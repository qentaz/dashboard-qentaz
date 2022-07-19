import React, { memo } from "react";
import { useTransactionsData } from "./hook/useTransactionsData";

const Transactions = memo(() => {
  const { transcationData, isFetchingData: loadingData } =
    useTransactionsData();

  return <div>Transactions</div>;
});

export default Transactions;
