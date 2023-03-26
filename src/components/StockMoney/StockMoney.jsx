import React from "react";
import cl from "./StockMoney.module.css";
const StockMoney = ({ stockMoney }) => {
  return (
    <h4 className={cl["stock__money"]}>
      {" "}
      Остаток денег на складе: {stockMoney}тг{" "}
    </h4>
  );
};

export default StockMoney;
