import React from "react";
import {MyButton} from "../UI/index";
import cl from "./StockItem.module.css";
const StockItem = (props) => {
  return (
    <div className={cl.product}>
      <div className="product__description">
        <strong> {props.product.name} </strong>
        <div>
          <span>Закупочная цена: {props.product.purchasePrice}тг</span>
          <span>Цена продажи: {props.product.sellingPrice}тг</span>
          <span>Количество на складе: {props.product.amount}</span>
        </div>
        <div className={cl["product__btns"]}>
          <MyButton onClick={() => props.sell(props.product)}>Продать</MyButton>
          <MyButton onClick={() => props.del(props.product)}>Удалить</MyButton>
        </div>
      </div>
    </div>
  );
};

export default StockItem;
