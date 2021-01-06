import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
// console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItemsHandler = (category) => {
    // console.log(category);
    if (category === "all") {
      // console.log(items);
      setMenuItems(items);
      return;
    }
    const newItem = items.filter((item) => {
      return item.category === category;
    });
    // console.log(newItem);
    setMenuItems(newItem);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          filterItemsHandler={filterItemsHandler}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
