import { TRANSACTION } from "../../config";
import { getData } from "../api-call";

const getAll = async () => await getData(TRANSACTION);

export const TransactionAPI = {
  getAll,
};
