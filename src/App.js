import { useState } from 'react';
import './App.css';
import Menu from "./data";
import MenuItems from './MenuItems';

//----- start function for dynamic filter navbar
const allNavItems = ["all",...new Set(Menu.map(data => data.category))];
//----- end function for dynamic filter navbar

function App() {
  const [ items,setItems ] = useState(Menu);
  const [ navbar, setNavbar ] = useState(allNavItems); //----- use for dynamic filter navbar
  
  const filterItems = (clickItem) =>{
    //-----start condition use for dynamic navbar all button
    if(clickItem === "all"){
      setItems(Menu);
      return;
    }//-----end condition use for dynamic navbar all button

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
            {/* ======== this is use for hardCoded Navbar =============== */}

           {/* <button onClick={()=>{setItems(Menu)}}>All</button>
           <button onClick={()=>{filterItems("shakes")}}>Shakes</button>
           <button onClick={()=>{filterItems("breakfast")}}>Breakfast</button>
           <button onClick={()=>{filterItems("lunch")}}>Lunch</button> */}

           {/* ======== this is use for dynamic Navbar =============== */}

           {
             navbar.map((nav,index) =>{
              return(
                <button key={index} onClick={()=>{filterItems(nav)}}>{nav}</button>
              )
             })
           }
           </center>
         </nav>
         <section className="menu-items">
              {
                items.map(menuItems =>{
                  return(
                    <MenuItems key={menuItems.id} menuItems={menuItems} />
                  )
                })
              }
         </section>
      </main>
    </div>
  );
}

export default App;
