
import './App.css';
import CartWidget from './CartWidget/CartWidget';
import Categories from './Navbar/Categories/Categories';
 import Navbar from './Navbar/Navbar';
 import ItemListConteiner from './ItemListConteiner/ItemListConteiner';
    
const App = () => {
  return (
    <div>
     <Navbar/> 
   <ItemListConteiner greeting={"..."}/>
    </div> 
  );
}

export default App;
              