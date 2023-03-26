import React from "react";
import { MyInput, MySelect } from "../UI/index";

const StockFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Поиск..."
      />
      <MySelect
        defaultValue="Сортировка"
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        options={[
          { value: "sellingPrice", name: "по цене" },
          { value: "amount", name: "по количеству" },
        ]}
      />
    </div>
  );
};

export default StockFilter;
