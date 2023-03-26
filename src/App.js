import React, { useEffect, useState } from "react";
import {
  AddForm,
  StockFilter,
  StockList,
  StockMoney,
} from "./components/index";
import { MyButton, MyModal } from "./components/UI/index";
import { useStock } from "./hooks/useStock";
import "./styles/App.css";
function App() {
  const [stock, setStock] = useState([
    {
      name: "Молоко",
      purchasePrice: 500,
      sellingPrice: 600,
      amount: 12,
    },
    {
      name: "Хлеб",
      purchasePrice: 100,
      sellingPrice: 120,
      amount: 10,
    },
    {
      name: "Сахар",
      purchasePrice: 900,
      sellingPrice: 1080,
      amount: 10,
    },
    {
      name: "Масло",
      purchasePrice: 700,
      sellingPrice: 940,
      amount: 15,
    },
    {
      name: "Чай",
      purchasePrice: 600,
      sellingPrice: 720,
      amount: 20,
    },
  ]);
  const [stockMoney, setStockMoney] = useState(1000000);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedProduct = useStock(stock, filter.sort, filter.query);
  const createProduct = (newProduct) => {
    let stockCopy = stock.slice();
    for (let i = 0; i < stockCopy.length; i++) {
      if (stockCopy[i].name === newProduct.name) {
        stockCopy[i].name = newProduct.name;
        stockCopy[i].purchasePrice = newProduct.purchasePrice;
        stockCopy[i].sellingPrice = newProduct.sellingPrice;
        stockCopy[i].amount += newProduct.amount;
        setStockMoney(
          stockMoney - newProduct.purchasePrice * newProduct.amount
        );

        return setStock([...stockCopy]);
      }
    }
    setStock([...stockCopy, newProduct]);
    setStockMoney(stockMoney - newProduct.purchasePrice * newProduct.amount);
    setModal(false);
  };
  const deleteProduct = (product) => {
    setStock(stock.filter((p) => p.name !== product.name));
  };
  const sellProduct = (product) => {
    let stockCopy = stock.slice();
    for (let i = 0; i < stock.length; i++) {
      if (stockCopy[i].name === product.name) {
        stockCopy[i].amount = stockCopy[i].amount - 1;
        setStockMoney(stockMoney + stockCopy[i].sellingPrice);
      }
    }
    setStock([...stockCopy]);
  };
  useEffect(() => {
    let empty = stock.filter((p) => p.amount === 0);
    if (empty.length) {
      deleteProduct(...empty);
    }
  }, [stock]);
  return (
    <div className="App">
      <StockMoney stockMoney={stockMoney} />
      <MyButton onClick={() => setModal(true)}>Добавить продукт</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <AddForm create={createProduct} />
      </MyModal>
      <hr />
      <StockFilter filter={filter} setFilter={setFilter} />
      <StockList
        del={deleteProduct}
        sell={sellProduct}
        stock={sortedAndSearchedProduct}
        title="Список продуктов на складе"
      />
    </div>
  );
}

export default App;
