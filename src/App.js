import { useState } from 'react';
import './App.css';
import Menu from "./data";
import MenuItems from './MenuItems';

function App() {
  const [ items,setItems ] = useState(Menu);

  const filterItems = (clickItem) =>{
     const finalProduct = Menu.filter(pd => pd.category === clickItem);
     setItems(finalProduct);
  }

  return (
    <div className="App">
      <header>
        <h2 style={{textAlign:'center',color:'orange'}}>Filter Products</h2>
      </header>
      <main>
         <nav>
           <center>
           <button onClick={()=>{setItems(Menu)}}>All</button>
           <button onClick={()=>{filterItems("shakes")}}>Shakes</button>
           <button onClick={()=>{filterItems("breakfast")}}>Breakfast</button>
           <button onClick={()=>{filterItems("lunch")}}>Lunch</button>
           </center>
         </nav>
         <section className="menu-items">
              {
                items.map(menuItems =>{
                  return(
                    <MenuItems menuItems={menuItems} />
                  )
                })
              }
         </section>
      </main>
    </div>
  );
}

export default App;
