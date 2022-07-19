import React, { useState, useEffect } from "react";
import { TransactionDataResponse } from "../model/Transaction.model";
import { TransactionAPI } from "../../../api/src/transcations";

export const useTransactionsData = () => {
  const [isFetchingData, setIsFetchingData] = useState<any>(false);
  const [transcationData, setTransactionData] =
    useState<TransactionDataResponse>([]);

  useEffect(() => {
    setIsFetchingData(true);

    TransactionAPI.getAll()
      .then((x) => setTransactionData(x))
      .finally(() => setIsFetchingData(false));
  }, []);

  return {
    transcationData,
    isFetchingData
  };
};
