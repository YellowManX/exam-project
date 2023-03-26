import React, { useState } from "react";
import { MyInput, MyButton } from "../UI/index";
import cl from "./AddForm.module.css";
const AddForm = ({ create }) => {
  const [product, setProduct] = useState({ title: "", price: "", amount: "" });
  const addProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      name: product.title,
      purchasePrice: +product.price,
      sellingPrice: Math.ceil(product.price * 1.2),
      amount: +product.amount,
    };
    create(newProduct);
    setProduct({ title: "", price: "", amount: "" });
  };
  return (
    <form className={cl.form}>
      <h3>Добавить продукты на склад</h3>
      <MyInput
        value={product.title || ""}
        onChange={(e) => setProduct({ ...product, title: e.target.value })}
        type="text"
        placeholder="Название товара"
      />
      <MyInput
        value={product.price || ""}
        onChange={(e) => setProduct({ ...product, price: e.target.value })}
        type="number"
        placeholder="Закупочная цена товара(тг)"
      />
      <MyInput
        value={product.amount || ""}
        onChange={(e) => setProduct({ ...product, amount: e.target.value })}
        type="number"
        placeholder="Количество товара"
      />
      <MyButton onClick={addProduct}>Добавить товар</MyButton>
    </form>
  );
};
export default AddForm;
