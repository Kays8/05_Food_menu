import { useState } from "react";
import "./App.css";
import Category from "./components/Category";
import Menu from "./components/Menu";
import data from "./data";

function App() {
    const [menuItems, SetMenuItems] = useState(data)
    const allCategories = [
      "All",
      ...new Set(
        data.map((item) => {
          return item.category;
        })
      ),
    ];
    const filterItems = (category)=>{
      if (category === "All"){
        SetMenuItems(data)
      } else {
        const newItems = data.filter(
          (item)=> item.category === category)
          SetMenuItems(newItems);
      }
      
    }
  return (
    <div>
      <h2>Workshop 2: Food Menu</h2>
      <main>
        <section>
          <section className="menu section">
            <div className="title">
              <h2>Our Menu</h2>
              <div className="underline"></div>
            </div>
            <Category allCategories={allCategories} filterItems={filterItems} />
            <Menu items={menuItems} />
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
