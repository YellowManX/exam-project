import React from "react";
import { StockItem, EmptyStock } from "../index";
import cl from "./StockList.module.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
const StockList = ({ stock, title, del, sell }) => {
  if (!stock.length) {
    return <EmptyStock />;
  }
  return (
    <div>
      <h2 className={cl.stockListTitle}> {title} </h2>
      <TransitionGroup>
        {stock.map((product) => (
          <CSSTransition key={product.name} timeout={500} classNames="product">
            <StockItem del={del} sell={sell} product={product} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};
export default StockList;
